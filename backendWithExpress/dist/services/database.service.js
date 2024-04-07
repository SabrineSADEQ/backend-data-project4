"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let db;
let newsCollection;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbConnString = process.env.DB_CONN_STRING;
        const dbName = process.env.DB_NAME;
        const collectionName = process.env.COLLECTION_NAME;
        if (!dbConnString || !dbName || !collectionName) {
            throw new Error("Database connection information is missing in environment variables");
        }
        const client = new mongodb_1.MongoClient(dbConnString);
        try {
            yield client.connect();
            console.log("Connected to MongoDB");
            db = client.db(dbName);
            newsCollection = db.collection(collectionName);
        }
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
function getAllNews() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield newsCollection.find().toArray();
    });
}
exports.getAllNews = getAllNews;
