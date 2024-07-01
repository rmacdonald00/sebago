export interface SebagoInfo{
    phoneNumber: string;
    address: Address;
    email: string;
    facebook: SocialMedia;
    instagram: SocialMedia;    
}

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface SocialMedia {
    username: string;
    externalLink: string;
}