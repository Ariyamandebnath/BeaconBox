import express from 'express';
import db from "../beaconbox_db/src";

const app = express();
app.use(express.json()); // Ensure you can parse JSON request bodies

app.post("/bankWebhook", async (req, res) => {
    try {
        const { token, userId, amount } = req.body;

        if (!token || !userId || !amount) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Update the user's balance in the database
        await db.balance.update({
            where: {
                userId: userId
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        });

        // Update the transaction status
        await db.onRampTransactions.update({
            where: {
                token: token
            },
            data: {
                status: "Success"
            }
        });

        // Respond with success
        return res.status(200).json({ message: "Balance updated and transaction status set to success" });
    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default app;
