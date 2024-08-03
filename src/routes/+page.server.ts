import { WebsiteImagesConfig } from '$lib/data/WebsiteContent';
import { error, type ServerLoadEvent } from '@sveltejs/kit';
export async function load(loadEvent: ServerLoadEvent) {
    return { WebsiteImagesConfig };
}
