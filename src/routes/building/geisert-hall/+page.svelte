<script lang="ts">
	import Machine from '$lib/components/Machine.svelte';

	let { data } = $props();

	const currentTime = new Date();

	let onlyShowAvailable = $state(false);
</script>

<main class="m-10">
	<div class="flex items-center gap-4">
		<a href="/" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Back</a>
		<div class="flex items-center gap-2">
			<input type="checkbox" bind:checked={onlyShowAvailable} id="onlyShowAvailable" />
			<label for="onlyShowAvailable">Only show available machines</label>
		</div>
	</div>

	<p class="my-4">Geisert Hall - Last updated at {currentTime.toLocaleTimeString()}.</p>

	<div class="flex flex-col gap-5">
		{#each data.responses as { location, machines }}
			{@const sortedMachines = machines.sort((a: any, b: any) => a.stickerNumber - b.stickerNumber)}
			<div class="bg-zinc-100 px-4 py-2 rounded-md">
				<h1 class="font-bold text-lg mb-2">{location}</h1>
				<div class="flex flex-wrap gap-3">
					{#each sortedMachines as machine}
						{#if onlyShowAvailable}
							{#if machine.available}
								<Machine {machine} />
							{/if}
						{:else}
							<Machine {machine} />
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>
