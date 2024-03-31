<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import { cn } from '$lib/utils.js';
	import fetcher, { type ProviderInfoResponse } from '$lib/utils/fetcher';
	import {
		ChevronsRight,
		Download,
		DownloadIcon,
		RotateCw,
		Save,
		VenetianMask
	} from 'lucide-svelte';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { onMount, tick } from 'svelte';
	import { rqbitStore } from '../../../downloads/utils/rqbitController';

	// Data Declarations
	const providers = [
		{
			value: 'baba',
			label: 'baba'
		},
		{
			value: 'notopiracy',
			label: 'notopiracy'
		}
	];

	export let title: string;
	let apiData: ProviderInfoResponse[] = []; // To store API data
	let open = false;
	let value = '';
	let selectedValue: string;

	// Reactive Statements
	$: selectedValue = providers.find((f) => f.value === value)?.label ?? 'Search providers...';
	$: console.log(apiData);

	// Function Declarations
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	async function handleButtonClick(url: string) {
		await $rqbitStore?.uploadTorrent(url);
		await goto('/downloads');
	}

	// Event handlers
	let fetchData: Promise<ProviderInfoResponse[]>;
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button>
			<Download class="mr-2 h-4 w-4" />
			Download
		</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<!--		header-->
		<Dialog.Header class="flex w-full flex-col gap-4">
			<Dialog.Title class="text-center">Select Your Download</Dialog.Title>
			<Dialog.Description class="mx-auto w-full">
				<Popover.Root bind:open let:ids>
					<Popover.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="outline"
							role="combobox"
							aria-expanded={open}
							class="w-full justify-between"
						>
							{selectedValue}
							<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</Popover.Trigger>
					<Popover.Content class="w-[465px] p-0">
						<Command.Root>
							<Command.Input placeholder="Search providers..." />
							<Command.Empty>No framework found.</Command.Empty>
							<Command.Group>
								{#each providers as provider}
									<Command.Item
										value={provider.value}
										onSelect={(currentValue) => {
											value = currentValue;
											closeAndFocusTrigger(ids.trigger);
										}}
									>
										<Check
											class={cn('mr-2 h-4 w-4', value !== provider.value && 'text-transparent')}
										/>
										{provider.label}
									</Command.Item>
								{/each}
							</Command.Group>
						</Command.Root>
					</Popover.Content>
				</Popover.Root>
			</Dialog.Description>
		</Dialog.Header>
		<!--		Middle-->
		<ScrollArea class="h-72 w-full rounded-md border">
			<div class="p-4">
				<h4 class="mb-4 text-sm font-medium leading-none">Links</h4>
				<ul>
					{#await fetchData}
						<div class="flex items-center justify-center px-4 py-14 text-center sm:px-14">
							<RotateCw class="mr-2 h-8 w-8 animate-spin stroke-primary text-primary" />
						</div>
					{:then apiData}
						{#if apiData && apiData.length > 0}
							{#each apiData as dataItem, index (index)}
								{#each dataItem?.downloads as data, i (i)}
									{#if data.name === 'magnet'}
										<button
											on:click={() => handleButtonClick(data.url)}
											class="group flex w-full cursor-pointer flex-col items-start justify-center gap-2 p-2 text-start text-sm hover:bg-primary"
										>
											{dataItem.title}
											<div class="flex w-full flex-row items-center justify-start gap-3">
												<div class="flex items-center gap-1 text-xs text-slate-300">
													<DownloadIcon
														class="h-3 w-3 stroke-primary group-hover:stroke-foreground"
													/>
													Magnet
												</div>
												<div class="flex items-center gap-1 text-xs text-slate-300">
													<Save class="h-3 w-3 stroke-primary group-hover:stroke-foreground" />
													{dataItem.fileSize}
												</div>
												<div class="flex items-center gap-1 text-xs text-slate-300">
													<VenetianMask
														class="h-3 w-3 stroke-primary group-hover:stroke-foreground"
													/>
													{dataItem.group}
												</div>
											</div>
										</button>
										<Separator class="my-2" />
									{/if}
								{/each}
							{/each}
						{/if}
					{:catch error}
						<p>Something went wrong: {error.message}</p>
					{/await}
				</ul>
			</div>
		</ScrollArea>
		<!--		footer-->
		<Dialog.Footer class="w-full">
			<Button class="flex w-full items-center gap-2 bg-muted" type="submit">
				Show All Providers
				<ChevronsRight class="h-5 w-5 stroke-slate-300" />
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
