export interface SocialPost {
    id: string | number;
    caption: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink?: string;
}