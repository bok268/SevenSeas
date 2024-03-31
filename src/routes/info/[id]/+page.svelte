<script lang="ts">
	// import types
	import type { IGDBData } from '$lib';
	// import components
	import IgdbImage from '$lib/components/CustomComponents/IGDBImage.svelte';
	import Bottom from './components/Bottom.svelte';
	import Middle from './components/Middle.svelte';
	import Top from './components/Top.svelte';

	// set props
	export let data: { gameInfo: IGDBData };
</script>
<style>
    * {
        background-color: hsla(222, 83%, 4%, 1);
        background-image: none !important;
    }
</style>
{#if data?.gameInfo}
	<div class="pb-20">
		<div>
			<IgdbImage
				imageId={data?.gameInfo?.screenshots?.[0]?.image_id ?? ''}
				alt={data?.gameInfo.name}
				class="h-64 w-full overflow-hidden rounded-b-lg object-cover lg:h-72"
				imageSize={'screenshot_med'}
			/>
		</div>
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<Top gameInfo={data?.gameInfo} />

			<Middle gameInfo={data?.gameInfo} />

			<Bottom gameInfo={data?.gameInfo} />
		</div>
	</div>
{/if}
