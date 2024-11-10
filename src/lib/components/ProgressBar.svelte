<script lang="ts">
	let { remaining, total }: { remaining: number; total: number } = $props();

	let percentage = $derived(((total - remaining) / total) * 100);
</script>

<div class="w-1/4 bg-gray-200 h-2 rounded-full">
	<div
		class="bg-red-500 text-white text-center text-sm rounded-full h-full"
		style="width: {percentage}%"
	></div>
</div>
