# Turborepo Fullstack App

A monorepo setup using [Turborepo](https://turbo.build/repo) with a fullstack architecture:
- `apps/user_app`: Frontend (Next.js)
- `packages/db`: Database setup using Prisma

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup your environment

Create a `.env` file in `packages/db` by copying the example:

```bash
cp packages/db/.env.example packages/db/.env
```

### 3. Generate Prisma Client

After setting up your `.env`, run the following to generate the Prisma client:

```bash
cd packages/db
npx prisma generate
```
---

### 🗂 Project Structure

```md
## 📂 Project Structure

