export interface CabinDetails {
    number: number;
    sleepsCount: number;
    beds: BedDescriptor[];
    nightlyBaseRate: number;
    weeklyRate: number;
    description: string;
    amenities: string[];
}

interface BedDescriptor {
    count: number;
    bedType: string;
}