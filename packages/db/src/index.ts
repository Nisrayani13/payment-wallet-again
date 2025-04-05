import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prismaClient = new PrismaClient({
  log: ['query'], 
})

async function connectToDb() {
  try {
    await prismaClient.$connect()
    console.log('✅ Connected to DB')
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err)
  }
}

connectToDb()

export const prisma = globalForPrisma.prisma ?? prismaClient

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
