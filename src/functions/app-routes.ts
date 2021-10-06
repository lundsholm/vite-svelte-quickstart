import Home from '../pages/Home.svelte';
import About from '../pages/About.svelte';

interface NavRoute {
  label: string;
  path: string;
}

export function appRoutes() {
  const fullRoutes = [
    { label: 'Home', path: '/', showInNavbar: true, component: Home },
    { label: 'About', path: '/about', showInNavbar: true, component: About },
  ];

  const navRoutes = fullRoutes
    .filter((route) => route.showInNavbar)
    .map((route): NavRoute => {
      return {
        label: route.label,
        path: route.path,
      };
    });

  const routes = fullRoutes.map((route) => {
    return {
      path: route.path,
      component: route.component,
    };
  });

  return { navRoutes, routes };
}
