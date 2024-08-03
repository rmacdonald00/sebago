import { WebsiteContentProvider } from "$lib/server/content-providers/WebsiteContentProvider";
import MongoDatabaseInstance from "$lib/server/database/MongoDatabase";

await MongoDatabaseInstance.openConnection();
await WebsiteContentProvider.loadWebsiteContent();