import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { BSON, Collection, Db, MongoClient } from 'mongodb';

class MongoDatabase {
    private mongoClient: MongoClient | undefined;

    private async getDb(): Promise<Db> {
        return this.mongoClient!.db('sebago-website-dev');
    }

    public async getCollection<T extends BSON.Document>(
        collectionName: string
    ): Promise<Collection<T>> {
        return (await this.getDb()).collection<T>(collectionName);
    }

    public async openConnection() {
        try {
            console.log("Opening Mongo Connection...", new Date());
            this.mongoClient = await MongoClient.connect(MONGO_CONNECTION_STRING);
        } catch (e) {
            console.error("Unable to connect to Mongo", e);
        }
    }

    public async closeConnection() {
        await this.mongoClient?.close();
        this.mongoClient = undefined;
    }
}

const MongoDatabaseInstance = new MongoDatabase();
export default MongoDatabaseInstance;
