import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const alise = await prisma.user.upsert({
        where: { number: '123454321' },
        update: {},
        create: {
            number: '123454321',
            password: await bcrypt.hash('alise', 10),
            name: 'alise',
            Balance: {
                create: {
                    amount: 2100000,
                    Locked: 0
                }
            },
            onRampTransactions: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2100000,
                    token: "token_1",
                    provider: "SBI BANK",
                },
            },
        },
    })
    const bob = await prisma.user.upsert({
        where: { number: '2222222222' },
        update: {},
        create: {
            number: '2222222222',
            password: await bcrypt.hash('bob', 10),
            name: 'bob',
            Balance: {
                create: {
                    amount: 2000,
                    Locked: 0
                }
            },
            onRampTransactions: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "token__2",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    console.log({ alise, bob })
}
main()
    .then(async () => {
    await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1);
        
})