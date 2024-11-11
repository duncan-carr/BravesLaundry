<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	let { machine }: { machine: any } = $props();
</script>

<div class="border border-zinc-400 rounded-md flex justify-between items-center w-full">
	<div class="flex items-center gap-3">
		<div class="bg-black rounded-l-md p-3">
			{#if machine.type === 'washer'}
				<i class="fa-solid fa-washing-machine text-white scale-150"></i>
			{:else}
				<i class="fa-solid fa-dryer bg-black text-white scale-150"></i>
			{/if}
		</div>
		<h2 class="font-semibold">{machine.stickerNumber}</h2>
		<small class="text-zinc-500">{machine.licensePlate}</small>
	</div>
	{#if !machine.available}
		<ProgressBar remaining={machine.timeRemaining} total={machine.type === 'washer' ? 30 : 45} />
		<p class="m-3">
			{`${machine.timeRemaining} ${machine.timeRemaining === 1 ? 'min' : 'mins'} left`}
		</p>
	{/if}
</div>
