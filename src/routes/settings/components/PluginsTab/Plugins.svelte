<script>


	import Input from '../../../../lib/components/ui/input/input.svelte';
	import Card from './sub-components/PluginCard.svelte';
	import { ArrowUpAZ, ArrowUpNarrowWide, Columns3, Rows3 } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index';

	let pluginLayout = 2;
	let SortBy = 1;
</script>


<div class="flex flex-col gap-3 pb-24">
		<!-- TOP AREA -->
		<div class="flex w-full flex-row items-center justify-between">
			<h3 class="pb-2 pl-2 font-mono text-lg font-medium leading-6">Plugins</h3>
			<div class="flex gap-2 items-center">
				{#if SortBy === 1}
					<Tooltip.Root>
						<button on:click={()=>{SortBy = 2}}>
							<Tooltip.Trigger>
								<ArrowUpAZ class="h-5 text-slate-400 hover:text-slate-300" />
							</Tooltip.Trigger>
						</button>
						<Tooltip.Content>
							<span>Sort by Alphabetic order </span>
						</Tooltip.Content>
					</Tooltip.Root>
				{:else}
					<Tooltip.Root>
						<button on:click={()=>{SortBy = 1}}>
							<Tooltip.Trigger>
								<ArrowUpNarrowWide class="h-5 text-slate-400 hover:text-slate-300" />
							</Tooltip.Trigger>
						</button>
						<Tooltip.Content>
							<span>=Sort by Popularity</span>
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}
				{#if pluginLayout === 1}
					<Tooltip.Root>
						<button on:click={()=>{pluginLayout = 2}}>
							<Tooltip.Trigger>
								<Columns3 class="h-5 text-slate-400" />
							</Tooltip.Trigger>
						</button>
						<Tooltip.Content>
							<span>Switch to Card layout</span>
						</Tooltip.Content>
					</Tooltip.Root>
				{:else}
					<Tooltip.Root>
						<button on:click={()=>{pluginLayout = 1}}>
							<Tooltip.Trigger>
								<Rows3 class="h-5 text-slate-400" />
							</Tooltip.Trigger>
						</button>
						<Tooltip.Content>
							<span>Switch to Row layout</span>
						</Tooltip.Content>
					</Tooltip.Root>
				{/if}
			</div>
		</div>

		<div class="flex w-full">
			<Input placeholder="Search Plugins" />
		</div>

		<div class="{pluginLayout === 1 ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'}">
			{#each Array(12) as _, i (i)}
			<Card />
			{/each}
		</div>
	</div>
