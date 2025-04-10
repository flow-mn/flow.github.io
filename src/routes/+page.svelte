<script lang="ts">
  import DiscordLogo from '$lib/components/DiscordLogo.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
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

  <div class="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <FeatureCard title="Free and open-source">
      Flow is a GPL v3.0 licensed, free, and open-source project.
    </FeatureCard>

    <FeatureCard title="Offline">Flow can work fully offline*</FeatureCard>

    <FeatureCard title="iCloud sync">
      With Flow 0.14.0, your data is periodically synced to iCloud, so you don't have to worry about
      losing your data.
    </FeatureCard>

    <FeatureCard title="Seamless UX">
      Flow tries to be as user-friendly as possible, with a clean and simple UI.
    </FeatureCard>
  </div>
</section>
