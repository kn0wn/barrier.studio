<script>
	/**
	 * Animation direction
	 * @type {"left" | "right"}
	 */
	export let direction = 'right';

	/**
	 * Animation speed calculated as pixels/second
	 * @type {number}
	 */
	export let speed = 100;

	/**
	 * Animation state
	 * @type {boolean}
	 */
	export let play = true;

	let containerWidth;
	$: duration = containerWidth / speed;

	$: _marqueeStyle = `
		--play: ${play ? 'running' : 'paused'};
		--direction: ${direction === 'left' ? 'normal' : 'reverse'};
		--duration: ${duration}s;
	`;
</script>

<div class="marquee-container bg-amber-300 text-amber-900" bind:clientWidth={containerWidth}>
	<div class="marquee" style={_marqueeStyle}>
		<slot />
	</div>
	<div class="marquee" style={_marqueeStyle}>
		<slot />
	</div>
</div>

<style>
	.marquee-container {
		@apply flex w-full overflow-x-hidden flex-row relative opacity-25;
	}

	.marquee {
		@apply min-w-full flex flex-row items-center z-[1] flex-[0_0_auto];
		animation: scroll var(--duration) linear 0s infinite;
		animation-play-state: var(--play);
		animation-direction: normal;
		animation-direction: var(--direction);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
