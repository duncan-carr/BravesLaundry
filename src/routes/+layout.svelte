<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="h-14 w-full flex border-b bg-white/60 backdrop-blur items-center">
	<div class="mx-6 flex items-center">
		<a class="mr-6 flex items-center gap-2" href="/">
			<i class="fa-solid fa-washing-machine scale-125"></i>
			<span class="font-bold font-geist">braves-laundry</span>
		</a>
		<div class="flex gap-6 font-geist text-sm">
			<a class="hover:text-black/80" href="/hall/geisert">Geisert</a>
			<a class="hover:text-black/80" href="/hall/harper">Harper</a>
			<a class="hover:text-black/80" href="/hall/heitz">Heitz</a>
			<a class="hover:text-black/80" href="/hall/williams">Williams</a>
			<a class="hover:text-black/80" href="/hall/university">University</a>
		</div>
	</div>
</header>

{@render children()}
