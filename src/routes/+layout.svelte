<script lang="ts">
	import '../app.pcss';

	import { navigating, page } from '$app/stores';
	import LightSwitch from '$lib/components/CustomComponents/LightSwitch.svelte';
	import NavLink from '$lib/components/CustomComponents/NavLink.svelte';
	import NavNotifications from '$lib/components/CustomComponents/NavNotifications/NavNotifications.svelte';
	import Search from '$lib/components/CustomComponents/Search.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import TitleBar from '$lib/containers/TitleBar/TitleBar.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { DownloadIcon, SearchIcon, ShipWheel } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { initializeRqbitStore } from './downloads/utils/rqbitController';

	const queryClient = new QueryClient();

	let isSearchVisible = writable<boolean>(false);
	onMount(initializeRqbitStore);

	const links: { title: string; url: string }[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Downloads', url: '/downloads' },
		{ title: 'Settings', url: '/settings' },
		{ title: 'Calendar', url: '/Calendar' },
		{ title: 'FAQ', url: '/faq' }
	];

	$: currentRoute = $page.url.pathname?.length <= 1 ? '/' : $page.url.pathname.split('/')?.[1];

	export let data;

	// // todo bring window on top
	// // todo fix the color on selected navbar
	// onMount(() => {
	// 	console.log('tea');
	// 	setTimeout(() => {
	// 		closeSplashScreen();
	// 	}, 300);
	// });

	// async function closeSplashScreen() {
	// 	try {

	// 		await invoke('close_splashscreen');
	// 		console.log('Splash screen closed and main window shown successfully');
	// 	} catch (err) {
	// 		console.error('Failed to close splash screen and show main window:', err);
	// 	}
	// }

	// 	wtf
</script>

<TitleBar />
<Toaster />
<QueryClientProvider client={queryClient}>
	<Search isVisible={isSearchVisible} />
	{#if $navigating}
		<ShipWheel class="fixed bottom-4 right-10 z-50 h-14 w-14 animate-spin stroke-primary" />
	{/if}
	<div class="relative mt-6 min-h-full">
		<nav class="bg-secondary/70 shadow-sm">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 justify-between">
					<div class="flex">
						<div class="flex-shrink-1 mt-1 flex items-center">
							<img class="aspect-square h-10 w-fit object-cover" src="/icon.png" alt="SevenSeas" />
							<div class="hidden h-full sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
								{#each links as link (link.title)}
									<NavLink {link} {currentRoute} />
								{/each}
							</div>
						</div>
					</div>
					<div class="hidden gap-2 sm:ml-6 sm:flex sm:items-center">
						<LightSwitch />

						<NavNotifications />

						<button
							class="relative rounded-full p-2 text-foreground hover:bg-muted hover:text-slate-400 focus:outline-none"
						>
							<!-- <div
								class="absolute -right-2.5 -top-1 flex items-center justify-center overflow-hidden rounded-full p-1 text-xs font-bold drop-shadow-2xl"
							>
								99+
							</div> -->
							<DownloadIcon class="h-5 w-5" />
						</button>

						<button
							class="relative rounded-full p-2 text-foreground hover:bg-muted hover:text-slate-400 focus:outline-none"
							on:click={() => isSearchVisible.set(true)}
						>
							<SearchIcon class="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		</nav>
		<!--todo: fix small layout shift somewhere maybe by defining default page height?-->
		<main class="">
			{#key data.pathname}
				<div
					in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
					out:fly={{ easing: cubicIn, y: -10, duration: 150 }}
					class="mx-auto max-w-7xl sm:px-6 lg:px-8"
				>
					<slot />
				</div>
			{/key}
		</main>
	</div>
</QueryClientProvider>

<style>
	main {
		/*todo allow switch to white on theme switch */
		background-color: hsla(222, 83%, 4%, 1);
		background-image: radial-gradient(at 50% 40%, hsla(175, 84%, 32%, 0.45) 0px, transparent 50%),
			radial-gradient(at 7% 12%, hsla(175, 84%, 32%, 0) 0px, transparent 50%);
	}
</style>
