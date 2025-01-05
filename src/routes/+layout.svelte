<script lang="ts">
	import Frame from '$lib/components/Frame.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<NavBar />
<Frame fullHeight>
	<main>
		{@render children()}
	</main>
</Frame>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;

		width: 100%;

		margin-top: var(--navbar-height, 0px);

		padding: 2rem 0 4rem 0;
	}
</style>
