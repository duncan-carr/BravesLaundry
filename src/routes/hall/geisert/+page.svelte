<script lang="ts">
	import LoadingMachine from '$lib/components/LoadingMachine.svelte';
	import LoadingPage from '$lib/components/LoadingPage.svelte';
	import Machine from '$lib/components/Machine.svelte';
	import { Label } from '$lib/shadcn-components/ui/label';
	import * as Select from '$lib/shadcn-components/ui/select/index.js';
	import Switch from '$lib/shadcn-components/ui/switch/switch.svelte';

	let { data } = $props();

	const currentTime = new Date();

	let visibleMachineType = $state('all');

	let onlyShowAvailable = $state(false);
</script>

<svelte:head>
	<title>Geisert Hall - braves-laundry</title>
</svelte:head>

<main class="m-6 font-geist">
	<div class="flex items-center justify-between text-sm mb-4">
		<div class="">
			<a class="text-muted-foreground hover:text-foreground" href="/">Home</a>
			<span class="mx-1 text-muted-foreground">/</span>
			<span>Geisert Hall</span>
		</div>

		<span class="text-muted-foreground">Updated at {currentTime.toLocaleTimeString()}</span>
	</div>

	<div class="my-4 flex gap-4 sm:items-center sm:flex-row flex-col sm:gap-8">
		<Select.Root onSelectedChange={(v) => v && (visibleMachineType = v.value as string)}>
			<Select.Trigger class="w-48">
				<Select.Value placeholder="All Machines" />
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="all" label="All Machines">
					<div class="flex items-center gap-2">All Machines</div>
				</Select.Item>
				<Select.Item value="washer" label="Washers">
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-washing-machine"></i>
						Washers
					</div>
				</Select.Item>
				<Select.Item value="dryer" label="Dryers">
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-dryer"></i>
						Dryers
					</div>
				</Select.Item>
			</Select.Content>
		</Select.Root>

		<div class="flex items-center gap-2">
			<Switch bind:checked={onlyShowAvailable} id="available-only" />
			<Label for="available-only">Only show available machines</Label>
		</div>
	</div>

	<div class="flex flex-col gap-5">
		{#await data.lazy.machineData}
			<LoadingPage floors={5} />
		{:then machineData}
			{#each machineData.responses as { location, machines }}
				{@const sortedMachines = machines.sort(
					(a: any, b: any) => a.stickerNumber - b.stickerNumber
				)}
				<div class="">
					{#if machineData.responses.length > 1}
						<h1 class="font-bold text-lg mb-2">{location}</h1>
					{/if}
					<div class="flex flex-wrap gap-3">
						{#each sortedMachines as machine}
							{#if onlyShowAvailable}
								{#if machine.available}
									{#if visibleMachineType === 'all' || machine.type === visibleMachineType}
										<Machine {machine} />
									{/if}
								{/if}
							{:else if visibleMachineType === 'all' || machine.type === visibleMachineType}
								<Machine {machine} />
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		{/await}
	</div>
</main>
