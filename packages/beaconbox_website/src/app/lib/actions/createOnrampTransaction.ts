"use server";

import prisma from "../../../../../beaconbox_db/src";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { randomBytes } from "crypto";

export async function createOnRampTransaction(provider: string, amount: number) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const token = randomBytes(16).toString('hex'); // Secure token generation

    try {
        await prisma.onRampTransaction.create({
            data: {
                provider,
                status: "Processing",
                startTime: new Date(),
                token: token,
                userId: Number(session.user.id),
                amount: amount * 100
            }
        });"use server";

import prisma from "../../../../../beaconbox_db/src";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(provider: string, amount: number) {
    // Ideally the token should come from the banking provider (hdfc/axis)
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }
    const token = (Math.random() * 1000).toString();
    await prisma.onRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(session?.user?.id),
            amount: amount * 100
        }
    });

    return {
        message: "Done"
    }
}


        return {
            message: "Done"
        }
    } catch (error) {
        console.error("Error creating on-ramp transaction:", error);
        return {
            message: "Error creating transaction"
        }
    }
}
