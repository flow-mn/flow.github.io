<script lang="ts">
	import Frame from './Frame.svelte';
</script>

<footer class="w-screen py-8 md:py-16">
	<Frame>
		<div class="flex flex-col gap-8">
			<ul
				class="grid grid-cols-1 gap-x-40 gap-y-6 md:grid-cols-3 md:gap-y-16 xl:grid-cols-4"
				data-no-bullet
			>
				<li data-aos="fade-right" data-aos-delay="200">
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
				<li data-aos="fade-right" data-aos-delay="400">
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
				<li data-aos="fade-right" data-aos-delay="600">
					<ul>
						<li class="header">Contribute</li>
						<li>
							<a href="https://github.com/flow-mn/flow/issues/new" target="_blank"
								>Report an issue</a
							>
						</li>
						<li>
							<a href="https://buymeacoffee.com/sadespresso" target="_blank">Buy me a coffee</a>
						</li>
					</ul>
				</li>
				<li data-aos="fade-right" data-aos-delay="800">
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
	footer {
		box-shadow: 0 -1px 6px 0px rgba(255, 255, 255, 0.1);
	}

	li.header {
		opacity: 0.6;
		@apply mb-2;
	}
</style>
