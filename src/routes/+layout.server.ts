import WebsiteContentCollection from '$lib/server/database/WebsiteContentCollection';
import BackupWebsiteContent from '$lib/data/content.json';
export async function load() {
    const websiteContentCollection = new WebsiteContentCollection();
    console.log("Loading Website Content...", new Date());
    try {
        const loadedContent = await websiteContentCollection.getLatestEntry();
        if (loadedContent) {
            return {
                SebagoDetails: loadedContent.SebagoContactDetails,
                AboutSebagoSections: loadedContent.AboutSections,
                RentalTerms: loadedContent.RentalTerms,
                CabinInfo: loadedContent.CabinDetails,
                HomePageRows: loadedContent.HomePageRows,
                WelcomeParagraph: loadedContent.WelcomeParagraph
            };
        }
    } catch (e) {
        console.error("No website content found.", e);
    }
    return {
        SebagoDetails: BackupWebsiteContent.SebagoContactDetails,
        AboutSebagoSections: BackupWebsiteContent.AboutSections,
        RentalTerms: BackupWebsiteContent.RentalTerms,
        CabinInfo: BackupWebsiteContent.CabinDetails,
        HomePageRows: BackupWebsiteContent.HomePageRows,
        WelcomeParagraph: BackupWebsiteContent.WelcomeParagraph
    };
}
