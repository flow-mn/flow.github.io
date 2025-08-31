<script>
  import Frame from './Frame.svelte';
  import GitHubOctocat from './GitHubOctocat.svelte';
  import Logo from './Logo.svelte';
  import Item from './NavBar/Item.svelte';
</script>

<nav class="fixed top-0 right-0 left-0 z-50 bg-background shadow-xs">
  <Frame>
    <ul
      class="flex h-(--navbar-height,4rem) w-full flex-row items-center gap-1.5 font-semibold *:list-none *:before:content-['']! md:gap-8"
    >
      <li>
        <a href="/" class="inline-flex flex-row items-center gap-1.5">
          <Logo />
        </a>
      </li>
      <li class="spacer w-full flex-1"></li>
      <li>
        <Item href="/donate">Donate 🤍</Item>
      </li>
      <li>
        <Item href="/faq">FAQ</Item>
      </li>
      <li>
        <Item href="https://github.com/flow-mn/flow" target="_blank">
          <div class="inline-flex flex-row items-center gap-2">
            <GitHubOctocat />
            <span class="hidden md:block">GitHub</span>
          </div>
        </Item>
      </li>
    </ul>
  </Frame>
</nav>
