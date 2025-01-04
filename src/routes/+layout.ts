import WebsiteData from '$lib/data/content.json';
import type { WebsiteContent } from '$lib/models/WebsiteContentModel';
export function load() {
    const data: WebsiteContent = JSON.parse(JSON.stringify(WebsiteData));
    return {
        SebagoDetails: data.SebagoContactDetails,
        AboutSebagoSections: data.AboutSections,
        RentalTerms: data.RentalTerms,
        CabinInfo: data.CabinDetails,
        HomePageRows: data.HomePageRows,
        WelcomeParagraph: data.WelcomeParagraph
    };
}
