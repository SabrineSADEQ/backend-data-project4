// app.ts
import express from "express";
import dotenv from "dotenv";
import router from "./routes/routeNews";
import { connectToDatabase } from "./services/database.service";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(router);

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});


