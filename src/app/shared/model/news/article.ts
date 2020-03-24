import { Source } from './source';

export class Article {
    /**
     * Constructor with all the attributes
     * @param title - Title
     * @param description  - Descrption
     * @param url - URL of new article
     * @param urlToImage - Image URL
     * @param publishedAt - Date and Time
     * @param source - Source which contains id and name
     */
    constructor(public source: Source, public author: String, public title: String, public description: String, public url: String,
        public urlToImage: String, public publishedAt: Date, public content: String) {
    }
    /**
     * Model-adapter pattern to efficiently map the API output to the model
     * @param item Any type
     * @returns Article object
     */
    static adapt(item: any): Article {
        return new Article( new Source(item.source.id, item.source.name), item.author, item.title, item.description,
            item.url, item.urlToImage, item.publishedAt, item.content);
    }
}
