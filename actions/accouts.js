"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { se } from "date-fns/locale";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
  const serialized = { ...obj };
  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }
  return serialized;
};

export async function updateDefaultAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    await db.account.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });

    const account = await db.account.update({
      where: {
        id: accountId,
        userId: user.id,
      },
      data: { isDefault: true },
    });

    revalidatePath("/dashboard");

    return { success: true, data: serializeTransaction(account) };
    // Fetch all accounts for the user
    // const accounts = await db.account.findMany({
    //   where: { userId: user.id },
    // });

    // If the account is already default, do nothing
    // const account = accounts.find(acc => acc.id === accountId);
    // if (account.isDefault) return { success: true };

    // Unset other default accounts
    // await db.account.updateMany({
    //   where: { userId: user.id, isDefault: true },
    //   data: { isDefault: false },
    // });

    // Set the selected account as default
    // await db.account.update({
    //   where: { id: accountId },
    //   data: { isDefault: true },
    // });

    // revalidatePath("/dashboard");

    // return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
    // console.error("Error updating default account:", error);
    // throw error;
  }
}

export async function getAccountWithTransactions(accountId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // try {
  const account = await db.account.findUnique({
    where: { id: accountId, userId: user.id },
    include: {
      transactions: {
        orderBy: { date: "desc" },
      },
      _count: {
        select: {
          transactions: true,
        },
      },
    },
  });

  if (!account) return null;

  return {
    ...serializeTransaction(account),
    transactions: account.transactions.map(serializeTransaction),
  };
  // } catch (error) {
  //   console.error(error.message);
  //   throw error;
  // }
}
