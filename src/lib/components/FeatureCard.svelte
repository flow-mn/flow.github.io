<script lang="ts">
  import type { Snippet } from 'svelte';

  interface $Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: $Props = $props();
</script>

<div class="gradient-border flex flex-col gap-4 rounded-lg px-4 py-3">
  <div>
    {title}
  </div>
  <div>
    {@render children()}
  </div>
</div>

<style>
  /* primary: '#f2c0ff',
		 text: '#f5f6fa',
		 background: '#141414' */

  .gradient-border {
    background:
      linear-gradient(#141414, #141414) padding-box,
      linear-gradient(
          128deg,
          rgba(242, 192, 255, 1) 0%,
          rgba(245, 246, 250, 1) 10%,
          rgba(242, 192, 255, 1) 20%,
          rgba(242, 192, 255, 1) 40%,
          rgba(245, 246, 250, 1) 50%,
          rgba(242, 192, 255, 1) 60%,
          rgba(242, 192, 255, 1) 80%,
          rgba(245, 246, 250, 1) 90%,
          rgba(242, 192, 255, 1) 100%
        )
        border-box;
    border: 2px solid transparent;
  }
</style>
