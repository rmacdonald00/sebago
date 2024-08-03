import type { WebsiteContent } from "$lib/models/WebsiteContent";
import WebsiteContentCollection from "../database/WebsiteContentCollection";

export class WebsiteContentProvider {
    private static WebsiteContent: WebsiteContent | null = null;;

    public static async loadWebsiteContent(): Promise<void> {
        const websiteContentCollection = new WebsiteContentCollection();
        console.log("Loading Website Content...", new Date());
        WebsiteContentProvider.WebsiteContent = await websiteContentCollection.getLatestEntry();
        console.log(WebsiteContentProvider.WebsiteContent);
    }
}