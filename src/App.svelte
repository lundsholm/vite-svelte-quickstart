<script lang="ts">
  import { Router, Link, Route } from 'svelte-navigator';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
  <div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="about" component={About} />
  </div>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
