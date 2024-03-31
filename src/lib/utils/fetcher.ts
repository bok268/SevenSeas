import { PUBLIC_API_URL } from '$env/static/public';
import type { IGDBData } from '$lib/@types';

interface Pagination {
	offset: number;
	limit: number;
}

export interface ProviderResponse {
	title: string;
	group: string | null;
	id: string;
	url: string;
	[x: string]: unknown;
}

export interface SpecsInfo {
	os_info?: string;
	cpu_info?: string;
	ram_info?: string;
	gpu_info?: string;
	// Add more properties if there are more specs info fields
}
export interface ProviderInfoResponse {
	title: string;
	group: string | null;
	downloads: Link[];
	image: string;
	screenshots: string[];
	fileSize?: string;
	repackSize?: string;
	specs?: SpecsInfo;  // Add the specs property
	[x: string]: unknown;
}

export interface Link {
	url: string;
	name: string;
}

class Fetcher {
	private apiUrl: string = PUBLIC_API_URL;

	async igdbSearch(query: string, pagination?: Pagination) {
		return await this.makeReq<IGDBData[]>(`${this.apiUrl}/igdb/search?query=${query}`, pagination);
	}

	async igdbInfo(id: string) {
		return await this.makeReq<IGDBData>(`${this.apiUrl}/igdb/info/${id}`);
	}

	async igdbTopRated(pagination?: Pagination) {
		return await this.makeReq<IGDBData[]>(`${this.apiUrl}/igdb/top-rated`, pagination);
	}

	async igdbMostAnticipated(pagination?: Pagination) {
		return await this.makeReq<IGDBData[]>(`${this.apiUrl}/igdb/most-anticipated`, pagination);
	}

	async searchFitGirl(query: string): Promise<ProviderResponse[]> {
		const fitgirlSearchUrl = 'https://sevenseas.tdanks.com/crack/fitgirl/search';
		return await this.makeReq<ProviderResponse[]>(`${fitgirlSearchUrl}?query=${query}`);
	}

	async infoFitGirl(url: string): Promise<ProviderInfoResponse> {
		const fitgirlInfoUrl = 'https://sevenseas.tdanks.com/crack/fitgirl/info';
		return await this.makeReq<ProviderInfoResponse>(`${fitgirlInfoUrl}/${url}`);
	}
	/**
	 * Makes a GET request to the specified URL and parses the response body as JSON.
	 * If pagination is specified, adds it as query parameters to the URL.
	 *
	 * @template T The expected JSON response type
	 * @param reqUrl The URL to make the request to
	 * @param pagination Optional pagination options
	 * @returns The parsed JSON response
	 * @throws {Error} If the request fails or the JSON parsing fails
	 */
	private async makeReq<T = unknown>(reqUrl: string, pagination?: Pagination): Promise<T> {
		try {
			const url = new URL(reqUrl);
			if (pagination) {
				url.searchParams.append('offset', pagination.offset.toString());
				url.searchParams.append('limit', pagination.limit.toString());
			}

			const response = await fetch(url);
			const json = await response.json();
			return json as T;
		} catch (error) {
			console.log(error);
			throw new Error(`${error}`);
		}
	}
}

export default new Fetcher();
