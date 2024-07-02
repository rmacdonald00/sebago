export interface SebagoInfo{
    phoneNumber: string;
    address: Address;
    email: string;
    facebook: SocialMedia;
    instagram: SocialMedia;    
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
    directions: string;
}

interface SocialMedia {
    username: string;
    externalLink: string;
}