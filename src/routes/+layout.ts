import WebsiteContent from '$lib/data/content.json';
export function load() {
    return {
        SebagoDetails: WebsiteContent.SebagoContactDetails,
        AboutSebagoSections: WebsiteContent.AboutSections,
        RentalTerms: WebsiteContent.RentalTerms,
        CabinInfo: WebsiteContent.CabinDetails,
        HomePageRows: WebsiteContent.HomePageRows,
        WelcomeParagraph: WebsiteContent.WelcomeParagraph
    };
}
