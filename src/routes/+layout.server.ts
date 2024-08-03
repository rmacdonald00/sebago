import WebsiteContentCollection from '$lib/server/database/WebsiteContentCollection';
import { error } from '@sveltejs/kit';
export async function load() {
    const websiteContentCollection = new WebsiteContentCollection();
    console.log("Loading Website Content...", new Date());
    const loadedContent = await websiteContentCollection.getLatestEntry();
    if (!loadedContent) {
        console.error("No website content found.");
        error(500);
    }
    return {
        SebagoDetails: loadedContent.SebagoContactDetails,
        AboutSebagoSections: loadedContent.AboutSections,
        RentalTerms: loadedContent.RentalTerms,
        CabinInfo: loadedContent.CabinDetails,
        HomePageRows: loadedContent.HomePageRows,
        WelcomeParagraph: loadedContent.WelcomeParagraph
    };
}
