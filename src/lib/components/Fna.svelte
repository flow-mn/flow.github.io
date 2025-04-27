<script lang="ts">
  interface $Props {
    href?: string;
    n: string;
  }

  let { href: propHref, n }: $Props = $props();

  const href = propHref ?? `#fna${n}`;
</script>

<sup>
  <a {href}>[{n}]</a>
</sup>
