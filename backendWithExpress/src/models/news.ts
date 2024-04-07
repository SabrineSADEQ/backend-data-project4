import { ObjectId } from "mongodb";

export default class News {
    constructor(
        public _id: ObjectId,
        public author: string,
        public title: string,
        public url: string,
        public publishedAt: Date
    ) {}
}
