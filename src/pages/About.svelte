<script lang="ts">
  import { onMount } from 'svelte';

  import type { NavigateFn, NavigatorLocation } from 'svelte-navigator';
  export let location: NavigatorLocation;
  export let navigate: NavigateFn;

  onMount(() => {
    console.log(location);
  });
</script>

<main class="flex flex-col items-center antialiased">
  <h1>Hi, this is /about</h1>
  <button
    class="bg-red-200 bg-opacity-50 text-red-500 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-full mt-5"
    on:click={() => navigate('/')}
  >
    Go home
  </button>
</main>

<style lang="scss">
</style>
