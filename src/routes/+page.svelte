<script lang="ts">
	const buildings = [
		'Geisert Hall',
		'University Hall',
		'Harper Hall',
		'Heitz Hall',
		'Williams Hall'
	];
</script>

<main class="m-10">
	<p>The CSC Go Mobile App sucks. Use this instead.</p>
	<h1 class="font-bold text-lg my-4">Select your building</h1>

	<div class="flex gap-3">
		{#each buildings as building}
			<a
				href={`/building/${building.toLowerCase().replace(' ', '-')}`}
				class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
			>
				{building}
			</a>
		{/each}
	</div>
</main>
