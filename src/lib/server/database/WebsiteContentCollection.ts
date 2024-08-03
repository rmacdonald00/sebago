import type { Sort, WithId } from "mongodb";
import ICollection from "./ICollection";
import { CurrentModelVersion, type WebsiteContent } from "../../models/WebsiteContentModel";

export default class WebsiteContentCollection extends ICollection<WebsiteContent> {
    protected collectionName = 'website-content-versions';

    public async getLatestEntry(): Promise<WithId<WebsiteContent> | null> {
        const collection = await this.getCollection();
        const filter = {
            ModelVersionKey: { $eq: CurrentModelVersion }
        }
        const sort: Sort = {
            _id: -1
        };
        return collection.findOne(filter, { sort: sort });
    }
}