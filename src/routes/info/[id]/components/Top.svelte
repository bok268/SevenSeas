<script lang="ts">
	import type { IGDBData, ReleaseDate } from '$lib';
	import IgdbImage from '$lib/components/CustomComponents/IGDBImage.svelte';
	import DownloadDialog from '../components/DownloadDialog.svelte';
	import QuickInfo from '../components/QuickInfo/QuickInfo.svelte';

	export let gameInfo: IGDBData;

	let releaseDates: ReleaseDate[];
	let releaseDate: ReleaseDate;
	let isReleased: boolean;

	$: releaseDates = gameInfo.release_dates ?? [];
	$: releaseDate = releaseDates?.find((item) => item.platform === 6) ?? releaseDates[0];
	$: isReleased = isReleased = (releaseDate?.date ?? 0) < Date.now() / 1000;
</script>

<div class="sm:-mt-24 sm:flex sm:items-start sm:space-x-5">
	<div class="relative flex">
		<IgdbImage
			imageId={gameInfo.cover?.image_id ?? ''}
			alt={gameInfo.name}
			class="h-72 rounded-lg object-cover ring-4 ring-primary"
			imageSize={'cover_big'}
		/>
		<div
			class="absolute bottom-1 right-0 z-50 flex w-full items-center justify-center gap-1 overflow-visible text-center"
		></div>
	</div>

	<div class="mt-12 sm:min-w-0 sm:flex-1 sm:items-center sm:justify-start sm:pb-1">
		<section class="flex">
			<div class="mt-16 min-w-0 flex-1 sm:hidden md:block">
				<h1 class="truncate text-2xl font-bold">{gameInfo.name}</h1>
			</div>
			<div
				class="mt-14 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
			>
				<DownloadDialog title={gameInfo.name} />
			</div>
		</section>

		<QuickInfo {gameInfo} {isReleased} {releaseDate} />
	</div>
</div>
