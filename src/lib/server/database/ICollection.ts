import type { Collection, Document } from 'mongodb';
import MongoDatabaseInstance from './MongoDatabase';

export default abstract class ICollection<T extends Document> {
    protected collection: Collection<T> | undefined;
    protected abstract collectionName: string;

    protected async getCollection(): Promise<Collection<T>> {
        if (!this.collection) {
            this.collection = await MongoDatabaseInstance.getCollection(this.collectionName);
        }
        return this.collection;
    }
}
