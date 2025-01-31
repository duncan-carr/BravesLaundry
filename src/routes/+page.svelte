<script lang="ts">
</script>

<svelte:head>
	<title>braves-laundry</title>
</svelte:head>

<main class="m-8 font-geist">
	<a href="https://github.com/duncan-carr/BravesLaundry" target="_blank" class="flex items-center gap-2 text-sm group w-fit">
		<p class="text-nowrap group-hover:underline">This project is open to contributions</p>
		<i class="fa-solid fa-arrow-right scale-90"></i>
	</a>
	
	<h1 class="text-4xl font-bold mt-4 text-pretty">Do your laundry the smart way</h1>

	<p class="my-2 font-light text-lg max-w-[36rem]">
		Easily view all laundry machines in your building to efficiently plan your laundry. Students deserve to have a better laundry experience.
	</p>

	<h3 class="text-2xl font-semibold">Select your building to get started...</h3>

	<div class="flex flex-wrap gap-4 mt-4">
		<a href="/hall/geisert" class="h-48 w-80 border rounded-md flex items-center justify-center hover:shadow-sm">Geisert Hall</a>
		<a href="/hall/harper" class="h-48 w-80 border rounded-md flex items-center justify-center hover:shadow-sm">Harper Hall</a>
		<a href="/hall/heitz" class="h-48 w-80 border rounded-md flex items-center justify-center hover:shadow-sm">Heitz Hall</a>
		<a href="/hall/williams" class="h-48 w-80 border rounded-md flex items-center justify-center hover:shadow-sm">Williams Hall</a>
		<a href="/hall/heitz" class="h-48 w-80 border rounded-md flex items-center justify-center hover:shadow-sm">University Hall</a>
	</div>
</main>
