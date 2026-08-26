import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	redirect(308, 'https://files.catbox.moe/9uif5k.zip');
};
