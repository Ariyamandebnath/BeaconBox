import express from 'express';
import db from "../beaconbox_db/src";

const app = express();
app.use(express.json()); 

app.post("/bankWebhook", async (req, res) => {
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string;

    } = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount,
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number
                            (paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransactions.updateMany({
                where: {
                    token:paymentInformation.token
                },
                data: {
                    status: "Success",
                }
            })
        ])

        res.json({
            message: "Captured"
        })
    } catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})


app.listen(3000);