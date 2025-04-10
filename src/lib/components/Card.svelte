<script lang="ts">
  import type { Snippet } from 'svelte';

  interface $Props {
    children: Snippet;
  }

  let { children }: $Props = $props();
</script>

<div class="flex flex-col gap-2 rounded-lg border border-primary bg-background px-3 py-2 text-text">
  {@render children()}
</div>
