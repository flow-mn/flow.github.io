<script lang="ts">
	import Frame from '$lib/components/Frame.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	let { children }: { children: Snippet } = $props();
</script>

<NavBar />
<Frame fullHeight>
	<main>
		{@render children()}
	</main>
</Frame>

<style>
	main {
		display: flex;
		flex-direction: column;

		max-width: 1280px;

		margin-top: var(--navbar-height, 0px);
	}

	@media only screen and (max-width: 1280px) {
		main {
			padding: 0 1rem;
		}
	}
</style>
