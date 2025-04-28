<script lang="ts">
	import LoadingMachine from './LoadingMachine.svelte';

	let { floors = 1, machinesPerFloor = 4 } = $props();
</script>

{#if floors > 0}
	{#each { length: floors } as _}
		<div class="bg-slate-300 h-6 w-20 animate-pulse rounded-md"></div>
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
