import { Article } from "./article";

export class NewsHolder {
    constructor(public status: String, public totalResults: number, public articles: Article[]) { }
    static adapt(item: any): NewsHolder {
        return new NewsHolder(item.status, item.totalResults, item.articles);
    }
}
