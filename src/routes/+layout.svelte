<script lang="ts">
	import Frame from '$lib/components/Frame.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';

	AOS.init();

	let { children }: { children: Snippet } = $props();
</script>

<NavBar />
<Frame fullHeight>
	<main class="flex w-full flex-col pb-16 pt-8">
		{@render children()}
	</main>
</Frame>
<Footer />

<style>
	main {
		margin-top: var(--navbar-height, 0px);
	}
</style>
