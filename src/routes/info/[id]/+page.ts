// src/routes/info/[id]/+page.server.ts
import { PUBLIC_API_URL } from '$env/static/public';

import type { IGDBData } from '$lib';
import { error } from '@sveltejs/kit';

/**
 * Loads game data and crack status for a given game ID.
 *
 * @param {object} params - The parameters object.
 * @param {string} params.id - The ID of the game.
 * @param {Function} fetch - The fetch function to make HTTP requests.
 *
 * @returns {Promise} A promise that resolves to an object containing the game ID,
 *                    game information, and crack status.
 * @throws {Error} Throws an error if the game ID is invalid or if there is an exception
 *                during the fetch process or parsing the response.
 */
export async function load({ params, fetch }): Promise<{
	id: string;
	gameInfo: IGDBData;
	// crackStatus: ProviderInfoResponse | null
}> {
	if (!params || !params.id || typeof params.id !== 'string')
		throw error(500, `Invalid game ID: ${params.id}`);

	const gameDataPromise: Promise<IGDBData> = fetch(`${PUBLIC_API_URL}/igdb/info/${params.id}`)
		.then((response) => {
			if (!response) throw error(500, `Null pointer exception when fetching game: ${params.id}`);

			return response.json();
		})
		.then((gameInfo) => {
			if (!gameInfo)
				throw error(500, `Null pointer exception when parsing game info: ${params.id}`);

			if (gameInfo?.slug?.includes('--')) {
				gameInfo.slug = gameInfo?.slug?.split('--')[0];
			}
			return gameInfo;
		})
		.catch((e) => {
			throw error(500, `Unhandled exception when parsing response: ${e}`);
		});

	const gameInfo = await gameDataPromise;
	return {
		id: params.id,
		gameInfo
		// crackStatus
	};
}
