<script lang="ts">
	import Frame from './Frame.svelte';
</script>

<footer>
	<Frame>
		<div class="col">
			<ul class="parent" data-no-bullet>
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
							<a href="/donate">Support Flow</a>
						</li>
					</ul>
				</li>
				<li>
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

		box-shadow: 0 -1px 6px 0px rgba(255, 255, 255, 0.1);
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

	@media only screen and (max-width: 1280px) {
		.parent {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media only screen and (max-width: 768px) {
		footer {
			padding: 2rem 0;
		}

		.parent {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			gap: 1.5rem;
		}
	}
</style>
