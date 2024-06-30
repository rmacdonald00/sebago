import type { CabinDetails } from "$lib/models/CabinDetails";
import type { Terms } from "$lib/models/Terms";
const BaseTerms: Terms = {
    checkInTime: "3:00 PM",
    checOutTime: "10:00 AM",
    minimumNights: 3
}

export const CabinInfo: CabinDetails[] = [
    {
        number: 1,
        sleepsCount: 6,
        description: '',
        nightlyBaseRate: 127.85,
        beds: [{count: 3, bedType: 'Double'}],
        weeklyRate: 895.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    },
    {
        number: 2,
        sleepsCount: 2,
        description: '',
        nightlyBaseRate: 119.30,
        beds: [{count: 3, bedType: 'Double'}],
        weeklyRate: 0.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    },
    {
        number: 3,
        sleepsCount: 2,
        description: '',
        nightlyBaseRate: 134.25,
        beds: [],
        weeklyRate: 0.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    },
    {
        number: 4,
        sleepsCount: 2,
        description: '',
        nightlyBaseRate: 141.45,
        beds: [],
        weeklyRate: 0.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    },
    {
        number: 5,
        sleepsCount: 2,
        description: '',
        nightlyBaseRate: 80.75,
        beds: [],
        weeklyRate: 0.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    },
    {
        number: 6,
        sleepsCount: 2,
        description: '',
        nightlyBaseRate: 100.00,
        beds: [],
        weeklyRate: 0.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
    }
]