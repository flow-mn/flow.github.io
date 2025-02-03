<script>
	import DiscordLogo from '$lib/components/DiscordLogo.svelte';
	import FlexDownloadButtons from '$lib/components/FlexDownloadButtons.svelte';
</script>

<svelte:head>
	<title>Flow - FOSS expense tracker</title>
</svelte:head>

<section class="flex flex-col items-center gap-10">
	<div class="h-20"></div>

	<div data-aos="fade-right" class="text-3xl font-semibold max-md:text-center">
		Start tracking your finances.
	</div>

	<a
		data-aos="fade-right"
		href="https://discord.gg/Ndh9VDeZa4"
		target="_blank"
		class="inline-block w-fit rounded-lg bg-primary px-3 py-2 text-lg font-semibold text-background visited:text-background"
	>
		<DiscordLogo></DiscordLogo>
		Join Discord for updates
	</a>

	<FlexDownloadButtons />

	<div class="h-20"></div>

	<p data-aos="fade-left" class="max-w-prose">
		Flow is a free and open-source personal finance tracking app. It is designed to be simple and
		easy to use while providing a complete set of features to help track your finance. Flow can work
		fully offline, meaning your data stays on your device unless you explicitly share it with
		someone else.
	</p>
</section>
