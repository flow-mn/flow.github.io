<script>
	import Frame from './Frame.svelte';
</script>

<nav>
	<Frame>
		<ul>
			<li>
				<a href="/">
					<img src="/flow.svg" alt="Flow logo" height="48" />
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
	}

	ul {
		height: var(--navbar-height);
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}

	ul,
	li {
		list-style: none;
	}
</style>
