"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class News {
    constructor(_id, author, title, url, publishedAt) {
        this._id = _id;
        this.author = author;
        this.title = title;
        this.url = url;
        this.publishedAt = publishedAt;
    }
}
exports.default = News;
