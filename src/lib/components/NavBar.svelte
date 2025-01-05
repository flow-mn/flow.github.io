<script>
	import Frame from './Frame.svelte';
	import GitHubOctocat from './GitHubOctocat.svelte';
</script>

<nav>
	<Frame>
		<ul>
			<li>
				<a href="/">
					<img src="/flow.svg" alt="Flow logo" height="48" />
				</a>
			</li>
			<li class="spacer"></li>
			<li>
				<a href="https://ko-fi.com/sadespresso" target="_blank">Donate</a>
			</li>
			<li>
				<a href="/faq">FAQ</a>
			</li>
			<li>
				<a href="https://github.com/flow-mn/flow" target="_blank" class="ir">
					<GitHubOctocat />
					<span>GitHub</span>
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

	.spacer {
		width: 100%;
		flex: 1 1 0;
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
