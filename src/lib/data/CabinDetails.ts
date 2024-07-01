import { BedType, type CabinDetails } from "$lib/models/CabinDetails";
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
        description: 'Lake front with two bedrooms (double beds). Sleeper couch and shower. Great cabin with lots of light. Decorated in browns and sea breeze blue. $895.00 plus tax per week. 3 night minimum when available with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 127.85,
        beds: [
            { count: 2, bedType: BedType.Double }, 
            { count: 1, bedType: BedType.SleeperCouch}
        ],
        weeklyRate: 895.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
        terms: BaseTerms
    },
    {
        number: 2,
        sleepsCount: 6,
        description: 'Lake front with two bedrooms. One bedroom with double bed and the other with two twin beds. There is also a sleeper couch that can sleep two. This cabin has a shower and is fully furnished with complete kitchen. We call this the "Americana" cabin with it\'s red gingham curtains and navy and white decor. $835.00 per week. 3 night minimum when available with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 119.30,
        beds: [
            { count: 1, bedType: BedType.Double }, 
            { count: 2, bedType: BedType.Twin}, 
            { count: 1, bedType: BedType.SleeperCouch }
        ],        weeklyRate: 835.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
        terms: BaseTerms
    },
    {
        number: 3,
        sleepsCount: 8,
        description: 'Lake front. 3 bedrooms with double beds. A sleeper couch. Shower. This is a great cabin with awesome decor. Walk right out the door to the steps and down to the lake. Weekly rental is $940.00 night. 3 night minimum when available with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 134.25,
        beds: [{ count: 3, bedType: BedType.Double},
            {count: 1, bedType: BedType.SleeperCouch }
        ], 
        weeklyRate: 940.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
        terms: BaseTerms
    },
    {
        number: 4,
        sleepsCount: 8,
        description: 'As with all of our cabins we supply sheets and all items necessary for a complete kitchen. You are asked to bring your own towels. Cabin 4 is our roomiest cabin with a spacious living room area. This makes it perfect for large families to gather. Weekly rental is $990.00. We will rent for a 3 night minimum when available with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 141.45,
        beds: [{count: 3, bedType: BedType.Double },
            {count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 990.0,
        amenities: ["WiFi", 'Kitchen', 'Shower'],
        terms: BaseTerms
    },
    {
        number: 5,
        sleepsCount: 4,
        description: 'Cabin 5 has one bedroom with a double bed. The living room has a sleeper couch. The kitchen/dining area has lots of room for gathering. We have called this our honeymoon cabin as it is typically best for a couple. However it is great for a single guest or a small family as the sleeper couch is a double. Please note this cabin shares a community shower just steps from your cabin with our cabin 6. The weekly rate on this cabin is $565.00. There is a 3 night minimum when available, with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 80.75,
        beds: [{count: 1, bedType: BedType.Double },
            {count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 565.0,
        amenities: ["WiFi", 'Kitchen'],
        terms: BaseTerms
    },
    {
        number: 6,
        sleepsCount:6,
        description: 'Cabin 6 has two bedrooms each with a double bed. There is also a sleeper couch. Cabin 6 does not have it\'s own private shower but is adjacent to the community shower house. The weekly rate is $700.00. There is a 3 night minimum when available with a cleaning charge of $60.00. To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. This deposit will be applied toward your rental.',
        nightlyBaseRate: 100.00,
        beds: [{count: 2, bedType: BedType.Double }, {count: 1, bedType: BedType.SleeperCouch }],
        weeklyRate: 700.0,
        amenities: ["WiFi", 'Kitchen'],
        terms: BaseTerms
    }
]