<script>
	import Frame from './Frame.svelte';
	import GitHubOctocat from './GitHubOctocat.svelte';
	import { afterNavigate } from '$app/navigation';
	import Logo from './Logo.svelte';

	let path = $state(window.location.pathname);

	afterNavigate(() => {
		path = window.location.pathname;
	});
</script>

<nav class="fixed left-0 right-0 top-0 bg-background shadow-sm">
	<Frame>
		<ul class="flex h-[var(--navbar-height,4rem)] w-full flex-row items-center gap-8 font-semibold">
			<li>
				<a href="/" class="inline-flex flex-row items-center gap-1.5">
					<Logo background="transparent" />
				</a>
			</li>
			<li class="spacer"></li>
			<li>
				<a href="/donate" class:active={path === '/donate'}>Donate 🤍</a>
			</li>
			<li>
				<a href="/faq" class:active={path === '/faq'}>FAQ</a>
			</li>
			<li>
				<a href="https://github.com/flow-mn/flow" target="_blank" class="ir">
					<GitHubOctocat />
					<span class="hidden md:block">GitHub</span>
				</a>
			</li>
		</ul>
	</Frame>
</nav>

<style>
	:global(:root) {
		--navbar-height: 4rem;
	}

	ul,
	li {
		list-style: none;
	}

	li::before {
		content: '' !important;
	}

	a,
	a:visited {
		@apply text-text;
	}

	a:hover,
	a:focus-visible {
		@apply text-primary;
	}

	.spacer {
		width: 100%;
		flex: 1 1 0;
	}

	.active {
		@apply !text-primary;
	}

	@media only screen and (max-width: 768px) {
		ul {
			gap: 1.5rem;
		}
	}
</style>
