<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import * as DropdownMenu from "$lib/shadcn-components/ui/dropdown-menu";
	import { Label } from 'bits-ui';

	let { children } = $props();
</script>

<ModeWatcher />

<header class="h-14 px-6 w-full flex border-b bg-background/60 backdrop-blur justify-between items-center top-0 sticky z-50">
	<div class="flex items-center">
		<a class="mr-6 flex items-center gap-2" href="/">
			<i class="fa-solid fa-washing-machine scale-125"></i>
			<span class="font-bold font-geist">braves-laundry</span>
		</a>
		<div class="md:flex gap-6 font-geist text-sm hidden">
			<a class="hover:text-black/80 dark:hover:text-white/80" href="/hall/geisert">Geisert</a>
			<a class="hover:text-black/80 dark:hover:text-white/80" href="/hall/harper">Harper</a>
			<a class="hover:text-black/80 dark:hover:text-white/80" href="/hall/heitz">Heitz</a>
			<a class="hover:text-black/80 dark:hover:text-white/80" href="/hall/williams">Williams</a>
			<a class="hover:text-black/80 dark:hover:text-white/80" href="/hall/university">University</a>
		</div>
	</div>

	<div class="flex items-center gap-2">
		<a href="https://github.com/duncan-carr/BravesLaundry" target="_blank" class="bg-foreground px-2 h-8 text-background md:flex hidden items-center justify-center rounded-md border" aria-label="GitHub repository">
			<i class="fa-brands fa-github mr-2"></i>
			<span class="font-geist text-sm">Contribute</span>
		</a>
		<button onclick={toggleMode} class="size-8 flex items-center justify-center border rounded-md">
			{#if $mode === 'light'}
				<i class="fa-solid fa-sun"></i>
			{:else}
				<i class="fa-solid fa-moon"></i>
			{/if}
			<span class="sr-only">Toggle theme</span>
		</button>
		<div class="md:hidden border rounded-md size-8 flex items-center justify-center">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<i class="fa-solid fa-bars-staggered"></i>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Select Your Building</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<a class="w-full" href="/hall/geisert">Geisert</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a class="w-full" href="/hall/harper">Harper</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a class="w-full" href="/hall/heitz">Heitz</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a class="w-full" href="/hall/williams">Williams</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a class="w-full" href="/hall/university">University</a>
						</DropdownMenu.Item>
					  </DropdownMenu.Group>
					  <DropdownMenu.Separator />
						<DropdownMenu.Item>
							<a class="w-full" href="https://github.com/duncan-carr/BravesLaundry" target="_blank" aria-label="GitHub repository">
								<i class="fa-brands fa-github mr-2"></i>
								<span class="font-geist text-sm">Contribute</span>
							</a>
						</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

{@render children()}
