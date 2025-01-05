<script lang="ts">
	import Frame from './Frame.svelte';
</script>

<footer>
	<Frame>
		<div class="col">
			<ul class="parent" data-no-bullet>
				<li>
					<ul>
						<li>
							<img alt="Flow logo" src="/flow.svg" height="64" />
						</li>
						<li>
							<span>Flow - A free and open-source personal finance tracker</span>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li class="header">Community</li>
						<li>
							<a href="https://github.com/flow-mn/flow" target="_blank">Visit GitHub</a>
						</li>
						<li>
							<a href="https://discord.gg/Ndh9VDeZa4" target="_blank">Join Discord</a>
						</li>
						<li>
							<a href="https://www.reddit.com/r/flow_app/" target="_blank">Join r/flow_app</a>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li class="header">Support</li>
						<li>
							<a href="/faq">FAQ</a>
						</li>
						<li>
							<a href="/privacy.html" target="_blank">Privacy Policy</a>
						</li>
						<li>
							<a href="/tos.html" target="_blank">Terms of Use</a>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li class="header">Contribute</li>
						<li>
							<a href="https://github.com/flow-mn/flow/issues/new" target="_blank"
								>Report an issue</a
							>
						</li>
						<li>
							<a href="https://ko-fi.com/sadespresso" target="_blank">Support Flow</a>
						</li>
					</ul>
					<div class="spacer"></div>
					<ul>
						<li class="header">Contact</li>
						<li>
							<a href="mailto:flow@gege.mn" target="_blank">flow@gege.mn</a>
						</li>
						<li>
							<a href="https://www.instagram.com/sadespresso/" target="_blank">Instagram</a>
						</li>
					</ul>
				</li>
			</ul>
			<div class="row">
				&copy; {new Date().getFullYear()} Batmend Ganbaatar
			</div>
		</div>
	</Frame>
</footer>

<style>
	.col {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	footer {
		width: 100vw;
		padding: 4rem 0;
	}

	li.header {
		opacity: 0.6;
		margin-bottom: 0.5rem;
	}

	.parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 10rem;
		row-gap: 4rem;
	}

	.spacer {
		height: 2rem;
	}

	@media only screen and (max-width: 1280px) {
		.parent {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media only screen and (max-width: 768px) {
		footer {
			padding: 2rem;
		}

		.parent {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
		}

		.spacer {
			height: 4rem;
		}
	}
</style>
