<script lang="ts">
	import type { Snippet } from 'svelte';

	interface $Props {
		children: Snippet;
		fullHeight?: boolean;
		padMobile?: boolean;
	}

	let { children, fullHeight = false, padMobile = true }: $Props = $props();
</script>

<div>
	<section class:fullHeight class:padMobile>
		{@render children()}
	</section>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100vw;
		overflow-x: hidden;
	}

	section {
		max-width: 1280px;
		width: 100%;
	}

	.fullHeight {
		min-height: 100vh;
		height: 100vh;
	}

	@media only screen and (max-width: 1280px) {
		section.padMobile {
			padding: 0 1.25rem;
		}
	}
</style>
