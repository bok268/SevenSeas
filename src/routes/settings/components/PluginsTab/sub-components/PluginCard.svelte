<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	export let pluginLayout: number;
// 	todo used that xdd
</script>

<!--<Card.Root class="relative h-[17rem] bg-secondary">-->
<!--	<Card.Header>-->
<!--		<div class="relative flex flex-row items-center justify-start gap-3">-->
<!--			&lt;!&ndash; IMG &ndash;&gt;-->
<!--			<Avatar.Root class="h-[60px] w-[60px]">-->
<!--				<Avatar.Image-->
<!--					class="object-cover"-->
<!--					src="https://images7.alphacoders.com/714/714040.jpg"-->
<!--					alt="Kratos"-->
<!--				/>-->
<!--				<Avatar.Fallback class="h-full w-full object-cover">KR</Avatar.Fallback>-->
<!--			</Avatar.Root>-->

<!--			&lt;!&ndash; Plugin Title + Author &ndash;&gt;-->
<!--			<div class="flex w-full flex-row justify-between gap-1">-->
<!--				<div class="flex-1">-->
<!--					<div class="flex w-full flex-col justify-start">-->
<!--						<h3 class="text-sm font-bold">Kratos</h3>-->
<!--						<p class="mt-1 text-sm text-slate-400">By BoBbb</p>-->
<!--						&lt;!&ndash; Type of plugin &ndash;&gt;-->
<!--						<div-->
<!--							class="mt-1 w-fit flex-grow-0 rounded-md border-[1.5px] border-primary px-3 py-1 text-sm text-primary"-->
<!--						>-->
<!--							Provider-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--				<div class="flex w-[15%] justify-end text-sm text-slate-400">V0.1</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</Card.Header>-->
<!--	<Card.Content>-->
<!--		<div class="line-clamp-3 text-sm text-slate-400">-->
<!--			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia reiciendis odio-->
<!--			laudantium veritatis, eaque eos qui voluptate corporis deleniti minima animi consequatur fugit-->
<!--			suscipit libero sint nulla, maiores omnis. Veniam distinctio officia quis incidunt, in-->
<!--			asperiores? Ratione commodi maiores, fugit dolorum ipsam numquam? Cupiditate eum, ea odit-->
<!--			incidunt nihil ducimus exercitationem sed aspernatur maiores, corporis perspiciatis eligendi-->
<!--			enim maxime?-->
<!--		</div>-->
<!--	</Card.Content>-->
<!--	<Card.Footer>-->
<!--		<div class="flex w-full flex-row items-center justify-end gap-3">-->
<!--			<Button variant="default" class="p-2 px-4">Update</Button>-->
<!--			<Button variant="destructive" class="p-2 px-4">Uninstall</Button>-->
<!--			&lt;!&ndash; <Button variant="default" class="p-2 px-4">Install</Button> &ndash;&gt;-->
<!--		</div>-->
<!--	</Card.Footer>-->
<!--</Card.Root>-->

<div
	class="grid items-center gap-4 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
	<div class="flex items-center flex-col   gap-4">
<!--		add self start to put img on top -->
		<div class="flex self-start gap-3">
		<img src="https://images7.alphacoders.com/714/714040.jpg" width="40" height="40" alt="Plugin" class="rounded"
																						style="aspect-ratio: 40 / 40; object-fit: cover;">
		<div class="grid gap-1.5"><h3 class="text-sm font-semibold">Cracked Gamestatus </h3>
			<p class="text-xs font-medium text-gray-500 dark:text-gray-400">
				Version 1.0.0
			</p>
		</div>
		</div>
			<p class="text-xs font-medium">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia reiciendis odio
							laudantium veritatis, eaque eos qui voluptate corporis deleniti minima animi consequatur fugit
							suscipit libero sint nulla, maiores omnis. Veniam distinctio officia quis incidunt, in
							asperiores?
			</p>
	</div>
	<div class="flex items-center gap-2 ml-auto">
		<button
			class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
			Update
		</button>
		<button
			class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-primary-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
			Uninstall
		</button>
	</div>
</div>