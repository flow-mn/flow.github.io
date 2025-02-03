<script lang="ts">
	import type { Snippet } from 'svelte';

	interface $Props {
		children: Snippet;
		fullHeight?: boolean;
		padMobile?: boolean;
	}

	let { children, fullHeight = false, padMobile = true }: $Props = $props();
</script>

<div class="flex w-screen flex-row justify-center overflow-x-hidden">
	<section class:fullHeight class:padMobile>
		{@render children()}
	</section>
</div>

<style>
	section {
		max-width: 1280px;
		max-width: min(1280px, 100vw);
		width: 100%;
	}

	.fullHeight {
		min-height: 80vh;
	}

	@media only screen and (max-width: 1280px) {
		section.padMobile {
			padding: 0 1.25rem;
		}
	}
</style>
