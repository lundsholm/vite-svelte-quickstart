<script lang="ts">
  import LogosSvelte from 'virtual:icons/logos/svelte';
  import LogosTailwindCSS from 'virtual:icons/logos/tailwindcss';
  import LogosTypescript from 'virtual:icons/logos/typescript';
  import Counter from '../lib/Counter.svelte';
  import { count } from '../store/store';
</script>

<main class="flex flex-col items-center antialiased">
  <h1>Hi, this is /home</h1>
  <div class="flex space-x-32">
    <LogosSvelte style="font-size: 10rem;" />
    <LogosTailwindCSS style="font-size: 10rem;" />
  </div>
  <LogosTypescript style="font-size: 10rem;" />
  <h1 class="text-xl text-red-400 mb-5 flex">
    <span class="mr-2">Hello</span>
    !{#each Array($count) as value}
      !
    {/each}
  </h1>
  <button
    class="bg-red-200 bg-opacity-50 text-red-500 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-full mb-5"
    on:click={() => count.add(1)}>Add 1 !</button
  >
  <Counter />

  <div class="text-center mt-5">
    <p>
      Visit <a class="text-blue-500" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
      apps.
    </p>

    <p>
      Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for the officially supported
      framework, also powered by Vite!
    </p>
  </div>
</main>

<style lang="scss">
</style>
