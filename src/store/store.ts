import { writable } from 'svelte/store';

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    add: (value: number) => update((n) => n + value),
    subtract: (value: number) => update((n) => n - value),
    reset: () => set(0),
  };
}

export const count = createCount();
