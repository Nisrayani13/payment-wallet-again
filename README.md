# Setup Instructions

**Clone the Repository**
```bash
git clone "https://github.com/Nisrayani13/paytm-project-starter-monorepo.git"
```

**Install Dependencies**
```bash
npm install
```

**🛠️ Environment Variables Setup**

Wherever you see a `.env.example` file (in any directory), follow these steps:

1. **Duplicate the file as `.env` in the same path**  
   You can do this using the terminal:
   ```bash
   cp .env.example .env
   ```
2. Open the new .env file and fill in the required credentials or configuration values.
These typically include things like database URLs, API keys, client secrets, etc.

**Set up the Database**
Migrate to db folder in `/packages`
```bash
npx prisma migrate dev
npx prisma db seed
```

**Start the application**
```bash
npm run dev
```

**Run the Bank Webhook**

Navigate to the `bank-webhook` directory and start the webhook:

```bash
node dist/index.js
```
**Test the Login**

   Use the following credentials to log in:

   - **Phone:** 1111111111
   - **Password:** alice

   (Refer to `seed.ts` for these credentials.)