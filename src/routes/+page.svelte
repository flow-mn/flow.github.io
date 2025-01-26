<script>
	import Card from '../lib/components/Card.svelte';
	import DiscordLogo from '../lib/components/DiscordLogo.svelte';
</script>

<section class="flex flex-col items-center gap-10">
	<div class="h-20"></div>

	<div data-aos="fade-right" class="text-3xl font-semibold">Start tracking your finances.</div>

	<a
		data-aos="fade-right"
		href="https://discord.gg/Ndh9VDeZa4"
		target="_blank"
		class="inline-block w-fit rounded-lg bg-primary px-3 py-2 text-lg font-semibold text-background"
	>
		<DiscordLogo></DiscordLogo>
		Join Discord for updates
	</a>

	<div class="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
		<a
			href="https://play.google.com/store/apps/details?id=mn.flow.flow&utm_source=web"
			target="_blank"
			aria-label="Google Play Store"
			data-aos="fade-right"
		>
			<img src="/googleplaystore.svg" alt="Google Play Store Download Button" />
		</a>
		<a
			href="https://apps.apple.com/mn/app/flow-expense-tracker/id6477741670?utm_source=web"
			target="_blank"
			aria-label="App Store"
			data-aos="fade-right"
		>
			<img src="/appstore.svg" alt="App Store Download Button" />
		</a>
	</div>

	<div class="h-20"></div>

	<p data-aos="fade-left" class="max-w-prose">
		Flow is a free and open-source personal finance tracking app. It is designed to be simple and
		easy to use while providing a complete set of features to help track your finance. Flow can work
		fully offline, meaning your data stays on your device unless you explicitly share it with
		someone else.
	</p>
</section>
