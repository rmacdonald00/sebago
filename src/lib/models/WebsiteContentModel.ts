import type { CabinDetails } from '$lib/models/CabinDetails';

export const CurrentModelVersion = 1;

export interface WebsiteContent extends Document {
	ModelVersionKey: number;
	SebagoContactDetails: SebagoInfo;
	AboutSections: string[];
	RentalTerms: Terms;
	CabinDetails: CabinDetails[];
	HomePageRows: HomePageRow[];
	WelcomeParagraph: string;
}

export interface SebagoInfo {
	name: string;
	phoneNumber: string;
	address: Address;
	email: string;
	socialMediaAccounts: SocialMedia[];
	emailContentDefaults?: { subject?: string; body?: string };
}

export interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
	directions: string;
	latitudeAndLongitude: [number, number];
}

interface SocialMedia {
	platform: string;
	username: string;
	externalLink: string;
}

export interface Terms {
	checkInTime: string;
	checkOutTime: string;
	bookingTermsDescription: string;
}

export interface HomePageRow {
	title: string;
	items: string[];
}
