import { Amenity, BedType, type CabinDetails } from "$lib/models/CabinDetails";
import type { ImageInfo } from "$lib/models/ImageInfo";
import type { SebagoInfo } from "$lib/models/SebagoInfo";
import type { Terms } from "$lib/models/Terms";

export const SebagoDetails: SebagoInfo = {
    phoneNumber: '913-961-7497',
    email: 'sebagoresort@yahoo.com',
    address: {
        street: '21735 Briarwood Lane',
        city: 'Nisswa',
        state: 'MN',
        zip: '56468',
        directions: 'From MN 371, turn East onto Nashway Road. The Sebago sign is approximately one mile down the road. Turn right, and start a great vacation.',
    },
    facebook: {
        username: 'Sebago Resort',
        externalLink: 'https://www.facebook.com/people/Sebago-Resort/100070741093493/?fref=ts',
    },
    instagram: {
        username: 'sebagoresort',
        externalLink: 'https://www.instagram.com/sebagoresort/'
    }
}

export const RentalTerms: Terms = {
    checkInTime: "3:00 PM",
    checkOutTime: "10:00 AM",
    bookingTermsDescription: `We do not book on-line. You may email us or call us to check our availability. 
    We will only finalize bookings by phone. Please note that we prefer weekly rentals, Saturday to Saturday but will rent per day with a 3 day minimum when available. 
    Prices do not include the 6.875% MN tax. Please call ${SebagoDetails.phoneNumber} for more information. 
    There is a 3 night minimum when available with a cleaning charge of $60.00. 
    To confirm your reservation, a $100.00 non-refundable deposit must be received within 10 days of making your reservation. 
    This deposit will be applied toward your rental.`,
}

export const CabinInfo: CabinDetails[] = [
    {
        number: 1,
        sleepsCount: 6,
        description: 'Lake front with two bedrooms (double beds). Sleeper couch and shower. Great cabin with lots of light. Decorated in browns and sea breeze blue.',
        dailyBaseRate: 127.85,
        beds: [
            { count: 2, bedType: BedType.Double },
            { count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 895.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen, Amenity.Shower],
        images: [
            {
                title: 'Cabin 1',
                altText: 'Cabin 1',
                pathToImage: './cabins/1.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    },
    {
        number: 2,
        sleepsCount: 6,
        description: 'Lake front with two bedrooms. One bedroom with double bed and the other with two twin beds. There is also a sleeper couch that can sleep two. This cabin has a shower and is fully furnished with complete kitchen. We call this the "Americana" cabin with it\'s red gingham curtains and navy and white decor.',
        dailyBaseRate: 119.30,
        beds: [
            { count: 1, bedType: BedType.Double },
            { count: 2, bedType: BedType.Twin },
            { count: 1, bedType: BedType.SleeperCouch }
        ], weeklyRate: 835.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen, Amenity.Shower],
        images: [
            {
                title: 'Cabin 2',
                altText: 'Cabin 2',
                pathToImage: './cabins/2.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    },
    {
        number: 3,
        sleepsCount: 8,
        description: 'Lake front. 3 bedrooms with double beds. A sleeper couch. Shower. This is a great cabin with awesome decor. Walk right out the door to the steps and down to the lake.',
        dailyBaseRate: 134.25,
        beds: [{ count: 3, bedType: BedType.Double },
        { count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 940.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen, Amenity.Shower],
        images: [
            {
                title: 'Cabin 3',
                altText: 'Cabin 3',
                pathToImage: './cabins/3.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    },
    {
        number: 4,
        sleepsCount: 8,
        description: 'As with all of our cabins we supply sheets and all items necessary for a complete kitchen. You are asked to bring your own towels. Cabin 4 is our roomiest cabin with a spacious living room area. This makes it perfect for large families to gather.',
        dailyBaseRate: 141.45,
        beds: [{ count: 3, bedType: BedType.Double },
        { count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 990.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen, Amenity.Shower],
        images: [
            {
                title: 'Cabin 4',
                altText: 'Cabin 4',
                pathToImage: './cabins/4.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    },
    {
        number: 5,
        sleepsCount: 4,
        description: 'Cabin 5 has one bedroom with a double bed. The living room has a sleeper couch. The kitchen/dining area has lots of room for gathering. We have called this our honeymoon cabin as it is typically best for a couple. However it is great for a single guest or a small family as the sleeper couch is a double. Please note this cabin shares a community shower just steps from your cabin with our cabin 6.',
        dailyBaseRate: 80.75,
        beds: [{ count: 1, bedType: BedType.Double },
        { count: 1, bedType: BedType.SleeperCouch }
        ],
        weeklyRate: 565.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen],
        images: [
            {
                title: 'Cabin 5',
                altText: 'Cabin 5',
                pathToImage: './cabins/5.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    },
    {
        number: 6,
        sleepsCount: 6,
        description: 'Cabin 6 has two bedrooms each with a double bed. There is also a sleeper couch. Cabin 6 does not have it\'s own private shower but is adjacent to the community shower house.',
        dailyBaseRate: 100.00,
        beds: [{ count: 2, bedType: BedType.Double }, { count: 1, bedType: BedType.SleeperCouch }],
        weeklyRate: 700.0,
        amenities: [Amenity.Wifi, Amenity.Kitchen],
        images: [
            {
                title: 'Cabin 6',
                altText: 'Cabin 6',
                pathToImage: './cabins/6.jpg'
            },
            {
                title: 'Store Front',
                altText: 'Sebago store front',
                pathToImage: './store-front.webp'
            },
        ]
    }
]

export const ReasonsToStayHere: string[] = [
    'Great fishing',
    'Shallow swimming area',
    'Quaint cozy  cottages',
    'Close to great golf and dining',
    'Nisswa shopping and events',
    'Near to Paul Bunyan bike trail',
    'Simple pleasures, no frills',
    'Historic - 98 years old this year!!',
    'Candy and ice cream store',
    'Perfect for family groups',
    'Grills and picnic tables',
    'Fishing boat with cabin. Motors for rent',
    'Docking privilege of your own boat',
    'Game garage with ping pong, foosball, air hockey. Sand volleyball court, horseshoes'
];

export const ThingsToNote: string[] = [
    'We supply bedding and all kitchen supplies',
    'Bring your own towels and toiletries',
    'Rate includes the use of aluminum fishing boat.',
    'Call for motor availability',
    'You may bring and dock your own boat',
    'We have plenty of life jackets',
    'No air conditioning but a great breeze from the lake and ample fans when needed.',
    'Wood is available for Franklin stoves when needed.'
];

export const AmenitiesList: string[] = [
    'Candy and ice cream store',
    'Family fun',
    'Sunbathing/swimming dock',
    '​Free Wi-Fi',
    'Fully equipped kitchen',
    'Ping-Pong',
    'Air hockey and foosball',
    'Volleyball',
    'Games and books for check out',
    'Canoe and paddle boat usage'
];

export const GalleryImages: ImageInfo[] = [
    {
        title: 'Store Front',
        altText: 'Sebago store front',
        pathToImage: './store-front.webp'
    },
    {
        title: 'Store Front 2',
        altText: 'Sebago store front',
        pathToImage: './cabins/1.jpg'
    },
    {
        title: 'Store Front 3',
        altText: 'Sebago store front',
        pathToImage: './cabins/5.jpg'
    },
    {
        title: 'Store Front 4',
        altText: 'Sebago store front',
        pathToImage: './cabins/3.jpg'
    },
    {
        title: 'Store Front 5',
        altText: 'Sebago store front',
        pathToImage: './cabins/2.jpg'
    },
    {
        title: 'Store Front',
        altText: 'Sebago store front',
        pathToImage: './store-front.webp'
    },
    {
        title: 'Store Front 2',
        altText: 'Sebago store front',
        pathToImage: './cabins/1.jpg'
    },
    {
        title: 'Store Front 3',
        altText: 'Sebago store front',
        pathToImage: './cabins/5.jpg'
    },
    {
        title: 'Store Front 4',
        altText: 'Sebago store front',
        pathToImage: './cabins/3.jpg'
    },
]