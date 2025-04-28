<script lang="ts">
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = ProgressPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let max: $$Props['max'] = 100;
	export let value: $$Props['value'] = undefined;
	export { className as class };

	$: progress = 100 - (100 * (value ?? 0)) / (max ?? 1);
	$: percentage = (100 * (value ?? 0)) / (max ?? 1);

	$: progressColor =
		percentage <= 33 ? 'bg-red-600' : percentage <= 66 ? 'bg-amber-600' : 'bg-green-600';
</script>

<ProgressPrimitive.Root
	class={cn('bg-secondary relative h-4 w-full overflow-hidden rounded-full', className)}
	{...$$restProps}
>
	<div
		class={cn('h-full w-full flex-1 transition-all', progressColor)}
		style={`transform: translateX(-${progress}%)`}
	></div>
</ProgressPrimitive.Root>
