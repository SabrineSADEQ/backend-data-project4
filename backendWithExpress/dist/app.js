"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routeNews_1 = __importDefault(require("./routes/routeNews"));
const database_service_1 = require("./services/database.service");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use(routeNews_1.default);
(0, database_service_1.connectToDatabase)().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
