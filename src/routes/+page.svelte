<script lang="ts">
  import DiscordLogo from '$lib/components/DiscordLogo.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import FlexDownloadButtons from '$lib/components/FlexDownloadButtons.svelte';
  import Fna from '$lib/components/Fna.svelte';
</script>

<svelte:head>
  <title>Flow - FOSS expense tracker</title>
</svelte:head>

<!-- md+ -->
<div class="babalo left-[25vw] top-[25vh] hidden animate-move-around-a md:block"></div>
<div class="babalo right-[20vw] top-[10vh] hidden animate-move-around-b md:block"></div>
<div class="babalo right-[15vw] top-[80vh] hidden animate-move-around-c md:block"></div>
<!-- mobile -->
<div class="babalo left-[-1vw] top-[10vh] animate-move-around-a md:hidden"></div>
<div class="babalo right-[8vw] top-[80vh] animate-move-around-c md:hidden"></div>

<section class="flex flex-col items-center gap-10">
  <div class="h-28"></div>

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

  <div class="h-28"></div>

  <div class="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <FeatureCard title="Free and open-source">
      {#snippet icon()}
        🌐
      {/snippet}
      Flow is a GPL v3.0 licensed, free, and open-source project.
    </FeatureCard>

    <FeatureCard title="Privacy-focused">
      {#snippet icon()}
        🔐
      {/snippet}
      You are in control of your data
      <Fna n="1" />
    </FeatureCard>

    <FeatureCard title="Offline">
      {#snippet icon()}
        ⚡️
      {/snippet}
      Flow can work fully offline <Fna n="2" />
    </FeatureCard>

    <FeatureCard title="Recurring transactions">
      {#snippet icon()}
        🔁
      {/snippet}
      Easily manage your subscriptions, paychecks, and bills
    </FeatureCard>
    <!-- <FeatureCard title="iCloud sync">
      {#snippet icon()}
        ☁️
      {/snippet}
      Your can periodically sync your data to iCloud
    </FeatureCard> -->

    <FeatureCard title="Seamless UX">
      {#snippet icon()}
        💯
      {/snippet}
      Flow tries to be as user-friendly as possible, with a clean and simple UI.
    </FeatureCard>

    <FeatureCard title="Multi-currency">
      {#snippet icon()}
        💱
      {/snippet}
      Flow supports multiple currencies, and can convert between them.
      <Fna n="2" />
    </FeatureCard>
  </div>

  <div class="h-28"></div>

  <div class="text-xs opacity-75">
    <p id="fna1">
      <span class="font-mono">[1]</span> - If you use older Android devices, or devices with Windows,
      or Linux-based operating systems, Flow may store your data, and backups in a easily accessible
      place. Make sure your device and system supports containerized storage, or other type of external
      access protection as you are responsible for your financial data.
    </p>
    <br />
    <p id="fna2">
      <span class="font-mono">[2]</span> - Flow may need internet to fetch exchange rates if you use
      more than one currency.
    </p>
  </div>
</section>
