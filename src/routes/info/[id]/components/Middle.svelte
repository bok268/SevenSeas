<script lang="ts">
	import type { IGDBData } from '$lib';
	import Hltb from '$lib/components/CustomComponents/HLTB.svelte';

	export let gameInfo: IGDBData;
</script>

{#if gameInfo.hltb?.gameplayMain}
	<div class="py-5">
		<Hltb
			times={[
				gameInfo.hltb.gameplayMain,
				gameInfo.hltb.gameplayMainExtra,
				gameInfo.hltb.gameplayCompletionist
			]}
		/>
	</div>
{/if}
