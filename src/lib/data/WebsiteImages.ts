import type { WebsiteImages } from "$lib/models/WebsiteImages";

import GalleryImagesData from './GalleryImages.json';

export const WebsiteImagesConfig: WebsiteImages = {
    Welcome: {
        pathToImage: './store-front.webp',
        altText: 'Outside of the Candy Store.',
        title: 'Store Front'
    },
    HomePageRow: [
        {
            pathToImage: './dock.webp',
            altText: 'Dock',
            title: 'Dock'
        },
        {
            pathToImage: './frog.webp',
            altText: 'frog',
            title: 'frog'
        },
        {
            pathToImage: './canoe.webp',
            altText: 'canoe',
            title: 'canoe'
        },
    ],

    ContactUs: {
        pathToImage: './welcome.webp',
        altText: 'welcome',
        title: 'welcome'
    },
    GalleryImages: GalleryImagesData
};