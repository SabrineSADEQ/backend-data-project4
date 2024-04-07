// routes.ts
import express, { Request, Response } from "express";
import { getAllNews } from "../services/database.service";

const router = express.Router();

router.get("/news", async (req: Request, res: Response) => {
    try {
        const news = await getAllNews();
        res.json(news);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
