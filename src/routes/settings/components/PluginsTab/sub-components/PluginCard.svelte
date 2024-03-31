<script>
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
</script>

<Card.Root class="relative h-[17rem] bg-secondary">
	<Card.Header>
		<div class="relative flex flex-row items-center justify-start gap-3">
			<!-- IMG -->
			<Avatar.Root class="h-[60px] w-[60px]">
				<Avatar.Image
					class="object-cover"
					src="https://images7.alphacoders.com/714/714040.jpg"
					alt="Kratos"
				/>
				<Avatar.Fallback class="h-full w-full object-cover">KR</Avatar.Fallback>
			</Avatar.Root>

			<!-- Plugin Title + Author -->
			<div class="flex w-full flex-row justify-between gap-1">
				<div class="flex-1">
					<div class="flex w-full flex-col justify-start">
						<h3 class="text-sm font-bold">Kratos</h3>
						<p class="mt-1 text-sm text-slate-400">By BoBbb</p>
						<!-- Type of plugin -->
						<div
							class="mt-1 w-fit flex-grow-0 rounded-md border-[1.5px] border-primary px-3 py-1 text-sm text-primary"
						>
							Provider
						</div>
					</div>
				</div>
				<div class="flex w-[15%] justify-end text-sm text-slate-400">V0.1</div>
			</div>
		</div>
	</Card.Header>
	<Card.Content>
		<div class="line-clamp-3 text-sm text-slate-400">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia reiciendis odio
			laudantium veritatis, eaque eos qui voluptate corporis deleniti minima animi consequatur fugit
			suscipit libero sint nulla, maiores omnis. Veniam distinctio officia quis incidunt, in
			asperiores? Ratione commodi maiores, fugit dolorum ipsam numquam? Cupiditate eum, ea odit
			incidunt nihil ducimus exercitationem sed aspernatur maiores, corporis perspiciatis eligendi
			enim maxime?
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full flex-row items-center justify-end gap-3">
			<Button variant="default" class="p-2 px-4">Update</Button>
			<Button variant="destructive" class="p-2 px-4">Uninstall</Button>
			<!-- <Button variant="default" class="p-2 px-4">Install</Button> -->
		</div>
	</Card.Footer>
</Card.Root>
