<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="content">
	{@render children()}
</div>

<style>
	.content {
		height: max-content;
	}

	:global(h1):not(:first-child),
	:global(h2):not(:first-child),
	:global(h3):not(:first-child),
	:global(h4):not(:first-child),
	:global(h5):not(:first-child),
	:global(h6):not(:first-child) {
		margin-top: 1.5em;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		margin-bottom: 0.5em;
	}

	:global(ul),
	:global(li) {
		list-style-position: inside;
		list-style-type: none;
	}

	:global(li:not([data-no-bullet] li))::before {
		content: '- ';
	}
</style>
