import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	redirect(308, 'https://files.catbox.moe/cu3pb8.apk');
};
