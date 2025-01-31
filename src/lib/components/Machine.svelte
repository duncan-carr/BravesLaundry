<script lang="ts">
	import Progress from "$lib/shadcn-components/ui/progress/progress.svelte";

	let { machine }: { machine: any } = $props();

	const maxTime = machine.type === 'washer' ? 30 : 45;
</script>

<div class="border rounded-md flex justify-between h-32 w-80 font-geist">
	<div class="p-4 w-full flex flex-col justify-between">
		{#if machine.type === 'washer'}
			<div class="flex items-center justify-between w-full text-sm font-semibold">
				<div>
					<p>Washer</p>
					<small class="font-normal">{machine.licensePlate}</small>
				</div>

				<div class="bg-black text-white rounded-full size-8 flex items-center justify-center">
					<p class="text-xs">{machine.stickerNumber}</p>
					{#if !machine.available}
						<div class="absolute">
							<div class="loader"></div>
						</div>
					{/if}
				</div>
			</div>

			{#if !machine.available}
				<div class="flex flex-col items-center gap-2">
					<p class="text-xs">{`${machine.timeRemaining} ${machine.timeRemaining === 1 ? 'min' : 'mins'} left`}</p>
					<Progress class="h-2" value={maxTime - machine.timeRemaining} max={maxTime}></Progress>
				</div>
			{/if}
		{:else}
			<div class="flex items-center justify-between w-full text-sm font-semibold">
				<div>
					<p>Dryer</p>
					<small class="font-normal">{machine.licensePlate}</small>
				</div>

				<div class="bg-black text-white rounded-full size-8 flex items-center justify-center">
					<p class="text-xs">{machine.stickerNumber}</p>
					{#if !machine.available}
						<div class="absolute">
							<div class="loader"></div>
						</div>
					{/if}
				</div>
			</div>

			{#if !machine.available}
				<div class="flex flex-col items-center gap-2">
					<p class="text-xs">{`${machine.timeRemaining} ${machine.timeRemaining === 1 ? 'min' : 'mins'} left`}</p>
					<Progress class="h-2" value={maxTime - machine.timeRemaining} max={maxTime}></Progress>
				</div>
			{/if}
		{/if}
	</div>
	

	<!-- <div class="flex items-center gap-4">
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
	{/if} -->
</div>
