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

<nav>
	<Frame>
		<ul>
			<li>
				<a href="/" class="ir">
					<Logo background="transparent" fill="var(--primary)" />
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

	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--background);

		box-shadow: 0 1px 6px 0px rgba(255, 255, 255, 0.1);
	}

	ul {
		height: var(--navbar-height);
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;

		font-weight: 600;

		gap: 2rem;
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
		color: var(--text);
	}

	a:hover,
	a:focus-visible {
		color: var(--primary);
	}

	.spacer {
		width: 100%;
		flex: 1 1 0;
	}

	.active {
		color: var(--primary) !important;
	}

	.ir {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}

	@media only screen and (max-width: 768px) {
		ul {
			gap: 1.5rem;
		}
	}
</style>
