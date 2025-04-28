<script lang="ts">
	import LoadingMachine from './LoadingMachine.svelte';

	let { floors = 1, machinesPerFloor = 4 } = $props();
</script>

{#if floors > 0}
	{#each { length: floors } as _}
		<div class="flex flex-col gap-2">
			<div class="bg-muted-foreground h-6 w-20 animate-pulse rounded-md"></div>
			<div class="mb-2 h-4 w-48 animate-pulse rounded-md bg-muted-foreground"></div>
		</div>
		<div class="flex flex-wrap gap-3">
			{#each { length: machinesPerFloor } as _}
				<LoadingMachine />
			{/each}
		</div>
	{/each}
{:else}
	<div class="flex flex-wrap gap-3">
		{#each { length: machinesPerFloor } as _}
			<LoadingMachine />
		{/each}
	</div>
{/if}
