<script lang="ts">
	import { timeSince, type IGDBData } from '$lib';
	import QuickInfoItem from './QuickInfoItem.svelte';

	export let gameInfo: IGDBData;
	export let isReleased: boolean;
	export let releaseDate: IGDBData['release_dates'][0];
</script>

<section class="mt-4 overflow-hidden text-ellipsis whitespace-normal text-sm text-slate-400">
	<ul
		class="-mt-1 flex flex-col justify-center gap-2 divide-gray-200 rounded-lg border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-background dark:text-gray-100"
	>
		<QuickInfoItem title={'Placeholder'} data="None" />
		<QuickInfoItem title={'Genres'} data={gameInfo.genres} />
		<QuickInfoItem
			title={'Genres'}
			data={gameInfo.aggregated_rating
				? `${gameInfo.aggregated_rating.toFixed(0)} / 100`
				: !isReleased
					? 'Not Released'
					: 'N/A'}
		/>
		<QuickInfoItem
			title={'Release Date'}
			data={`${releaseDate?.human} ${
				isReleased && releaseDate?.date ? `(${timeSince(releaseDate?.date * 1000)}) ` : ''
			}`}
		/>
	</ul>
</section>
