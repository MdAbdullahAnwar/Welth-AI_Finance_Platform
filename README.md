# 💰 Wealth – AI Finance Platform

Wealth is a full-stack AI-powered finance management platform built using **Next.js**, **Prisma**, **React Hook Form**, **Zod**, **Clerk**, **ShadCN UI** and **Inngest**. It empowers users to **track income and expenses**, **scan receipts using AI**, **analyze spending patterns** and **receive smart financial insights via email** — Wealth offers a fully responsive, secure and visually stunning financial management experience.

---

## 🌐 Live Demo

Check out the working version of this project in action! Explore the features and experience the full UI/UX flow.

🚀 [**Try the Live Demo on Vercel →**](https://welth-ai-finance-platform-pi.vercel.app/)

---

## 🚀 Features

### ✅ Core Functionality
- 💸 **Multi-Account Support** – Track income and expenses across multiple accounts.
- 📁 **Smart Categorization** – Automatically categorizes your transactions.
- 🧾 **AI Receipt Scanner** – Upload a receipt and let AI extract and fill transaction details.
- 🔁 **Recurring Transactions** – Manage subscriptions, salaries, etc. with recurring support.
- 📝 **Transaction History** – View, search, filter, and bulk-delete transactions.
- 🧮 **Budget Planning** – Set monthly budgets and monitor usage visually.

### 📊 Analytics & Visualization
- 📈 **Spending Charts** – Interactive graphs based on category, timeframe, and frequency.
- 🧠 **AI Monthly Insights** – Automatically receive monthly financial summaries via email.
- 📬 **Budget Alerts** – Email notifications when spending approaches your limit.

### 🔒 Security & Infrastructure
- 🛡 **Arcjet Protection** – Implements shields, bot protection, and rate limiting.
- 👥 **Authentication via Clerk** – Secure and seamless sign-in/sign-up with Google.
- 🧪 **Validated Forms** – All forms managed via `React Hook Form` + `Zod` validation.

### 🎨 Beautiful UI/UX
- 🧩 **Modern Landing Page** – (Smooth animations, testimonials)
- 📱 **Responsive Dashboard** – (Works on mobile & desktop)
- 📝 **Form Validation** – (React Hook Form + Zod)


---

## 📸 Screenshots
   
### 🏠 Landing Page with Scroll Animations
![Landing Page](https://i.ibb.co/LdTKhWcX/Landing-Page.png)

### 📊 User Dashboard with Budget Progress
![Dashboard](https://i.ibb.co/WvGD2XS3/Dashboard.png)

### 📋 Recent Transactions and Accounts Linked
![Transactions](https://i.ibb.co/xSv9YtX9/Account.png) 

### 📈 Bar Graph of All Past Transactions
![Bar Graph](https://i.ibb.co/9mL1Fp7h/Past-Transaction-Graph.png)

### 🧾 All Transactions with Details
![Transaction Table](https://i.ibb.co/7NYwhT1d/Past-Transactions.png)

### 🧠 Add Transactions Using AI-Powered Receipt Scanner
![Receipt Scanner](https://i.ibb.co/kgDBxtCf/Add-Transaction.png)  

### 🚨 Budget Alerts via Email
![Budget Alert](https://i.ibb.co/XxQTQGRT/BR.png)  

### 📧 Monthly Financial Report - Overview
![Report 1](https://i.ibb.co/dJcNQt9n/MFR1.png)

### 📊 Monthly Report - Category Breakdown
![Report 2](https://i.ibb.co/fz6tCBZg/MFR2.png)

### 💡 Monthly Report - AI Insights
![Report 3](https://i.ibb.co/mrcLNWC7/MFR3.png)  

---

## 🧱 Tech Stack

| Layer         | Tools & Libraries                                |
|---------------|--------------------------------------------------|
| Frontend      | Next.js 15, ShadCN UI, Tailwind CSS              |
| Backend       | Prisma ORM, PostgreSQL, Inngest (Cron Jobs)      |
| Auth          | Clerk                                            |
| Forms         | React Hook Form + Zod                            |
| AI            | Receipt Scanning using Gemini API                |
| Email         | React Email, Resend                              |
| Security      | Arcjet (bot protection, shield, rate limiting)   |
| Hosting       | Vercel                                           |

---

## 🧠 AI-Powered Use Cases

- **Receipt Parsing** – Upload receipts, auto-extract info, and create transactions.
- **Smart Alerts** – Get notified when 90%+ of budget is used.
- **Monthly Reports** – Receive detailed AI insights on spending trends and advice.

---

## 🗂 Folder Structure

```
wealth/
├── .next/
│
├── actions/
│   ├── account.js
│   ├── budget.js
│   ├── dashboard.js
│   ├── seed.js
│   ├── send-email.js
│   └── transaction.js
│
├── app/
│   ├── auth/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/page.jsx
│   │   ├── sign-up/
│   │   │   └── [[...sign-up]]/page.jsx
│   │   └── layout.js
│   │
│   ├── main/
│   │   ├── account/
│   │   │   ├── _components/
│   │   │   │   ├── account-chart.jsx
│   │   │   │   └── transaction-table.jsx
│   │   │   └── [id]/page.jsx
│   │   │ 
│   │   ├── dashboard/
│   │   │   ├── _components/
│   │   │   │   ├── account-card.jsx
│   │   │   │   ├── budget-progress.jsx
│   │   │   │   └── transaction-overview.jsx
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   │ 
│   │   ├── transaction/
│   │   │   ├── _components/
│   │   │   │   ├── recipt-scanner.jsx
│   │   │   │   └── transaction-form.jsx
│   │   │   ├── create/page.jsx
│   │   │   └── layout.js
│   │
│   ├── api/
│   │   ├── ingest/route.js
│   │   └── seed/route.js
│   │
│   ├── lib/
│   │   └── schema.js
│   │
│   ├── favicon.ico
│   ├── global.css
│   ├── layout.js
│   ├── not-found.jsx
│   └── page.jsx
│
├── components/
│   └── ui/
│       ├── create-account-drawer.jsx
│       ├── header.jsx
│       └── hero.jsx
│
├── data/
│   ├── categories.js
│   └── landing.js
│
├── emails/
│   └── template.jsx
│
├── hooks/
│   └── use-fetch.js
│
├── lib/
│   ├── arcjet.js
│   ├── checkUser.js
│   ├── prisma.js
│   ├── utils.js
│   ├── ingest/
│   │   ├── client.js
│   │   └── functions.js
│   └── generated/
│       └── prisma/
│
├── node_modules/
│
├── prisma/
│   ├── migrations/
│   │   └── _create_models/
│   │       └── migration.sql
│   └── schema.prisma
│
├── public/
│   ├── banner.jpeg
│   └── logo.png
```

---

## 🧪 Inngest Cron Functions

- **monthlyReport** – Runs on the 1st of each month
- **budgetAlert** – Triggered when budget usage > 90%
- **dailyInsight** – Sends summary and visual stats
- **recurringTransactionHandler** – Checks and records recurring txns

---

## 📧 Automated Emails & Cron Jobs

- **Budget Alerts** - When nearing spending limit
- **Monthly AI Reports** - Sent on the 1st of every month
- **Recurring Transactions** - Auto-processed via cron

---

## 🔐 Security Features

- **Bot Detection, shield and rate limiting** - **Middleware security using Arcjet**
- **Protected Routes** - **Clerk middleware**
- **Secure and optimized deployment** - **Vercel**

---

## 💡 Future Improvements

- Mobile App (React Native)
- Bank Sync (Plaid API)
- Investment Tracking (Stocks, Crypto)

---

## 📜 License

MIT © Md Abdullah Anwar

---
