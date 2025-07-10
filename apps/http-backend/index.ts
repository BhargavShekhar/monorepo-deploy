import prismaClinet from "@repo/db";
import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.json({ msg: "Backend is Working correctly!!" });
})

app.post("/add-users", async (req, res) => {
    try {
        await prismaClinet.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })

        res.json({ msg: "User Created" });
    } catch (error) {
        res.json({ msg: "User not Created" });
    }
})

app.listen(PORT, () => {
    console.log(`---- Server is running on port ${PORT} ----`);
})