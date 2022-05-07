import { writable } from 'svelte/store';

const cart = writable([
  {
    id: Date.now() * Math.random().toString(),
    title: 'Test',
    price: 9.99,
  },
  {
    id: Date.now() * Math.random().toString(),
    title: 'Test',
    price: 9.99,
  },
]);

export default cart;
