import type { ImageInfo } from "./ImageInfo";

export interface CabinDetails {
    number: number;
    sleepsCount: number;
    beds: BedDescriptor[];
    dailyBaseRate: number;
    weeklyRate: number;
    description: string;
    amenities: Amenity[];
    images: ImageInfo[];
}

interface BedDescriptor {
    count: number;
    bedType: BedType;
}

export enum BedType {
    Double = "Double",
    Twin = "Twin",
    SleeperCouch = "Sleeper Couch"
}

export enum Amenity {
    Wifi = "WiFi",
    Shower = "Shower",
    Kitchen = "Kitchen"
}