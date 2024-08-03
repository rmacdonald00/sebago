import type { WebsiteContent } from "$lib/models/WebsiteContent";
import type { Sort } from "mongodb";
import ICollection from "./ICollection";

export default class WebsiteContentCollection extends ICollection<WebsiteContent> {
    protected collectionName = 'website-content-versions';

    public async getLatestEntry() {
        const collection = await this.getCollection();
        const sort: Sort = {
            _id: -1
        };
        return collection.findOne({}, { sort: sort });
    }
}