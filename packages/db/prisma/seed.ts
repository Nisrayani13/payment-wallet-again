import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    create: {
      name: "alice",
      number: "111111111",
      password: await bcrypt.hash("alice", 10),
    },
    update: {},
    where: {
      number: "111111111",
    },
  });
  console.log(alice);
  const bob = await prisma.user.upsert({
    create: {
      name: "bob",
      number: "111111111",
      password: await bcrypt.hash("bob", 10),
    },
    update: {},
    where: {
      number: "111111111",
    },
  });
  console.log(bob);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
