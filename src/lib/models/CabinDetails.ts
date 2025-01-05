import type { ImageInfo } from './ImageInfo';

export interface CabinDetails {
	number: number;
	sleepsCount: number;
	beds: BedDescriptor[];
	dailyBaseRate: number;
	weeklyRate: number;
	description: string;
	amenities: Amenity[];
	images: ImageInfo[];
	insidePanoramaSource: string;
	insidePanoramaHost: string;
}

interface BedDescriptor {
	count: number;
	bedType: BedType;
}

export enum BedType {
	Double = 'Double Bed',
	Twin = 'Twin Bed',
	SleeperCouch = 'Sleeper Couch'
}

export enum Amenity {
	Wifi = 'WiFi',
	Shower = 'Shower',
	Kitchen = 'Kitchen'
}
