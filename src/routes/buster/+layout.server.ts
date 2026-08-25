import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    throw redirect(308, 'https://files.catbox.moe/z2jmuh.apk');
};
