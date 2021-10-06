<script lang="ts">
  import { Router, Link, Route } from 'svelte-navigator';
  import { appRoutes } from './functions/app-routes';
  const { navRoutes, routes } = appRoutes();
</script>

<Router>
  <nav class="flex">
    <ul class="flex">
      {#each navRoutes as navRoute}
        <li class="px-4 py-2">
          <Link to={navRoute.path}>{navRoute.label}</Link>
        </li>
      {/each}
    </ul>
  </nav>
  <div>
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </div>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
