import { MenuItem, Service } from './types';

export const menuItems: MenuItem[] = [
  {
    name: "Pawfect Pancakes",
    description: "Fluffy buttermilk pancakes served with maple syrup and fresh berries",
    price: 499,
    category: "human"
  },
  {
    name: "Bark-fast Bowl",
    description: "Scrambled eggs, bacon, avocado, and sourdough toast",
    price: 599,
    category: "human"
  },
  {
    name: "Puppy Patty",
    description: "Homemade beef patty with rice and vegetables (dog-friendly)",
    price: 349,
    category: "dog"
  },
  {
    name: "Tail-Wagging Turkey",
    description: "Ground turkey with sweet potato and green beans (dog-friendly)",
    price: 299,
    category: "dog"
  }
];

export const services: Service[] = [
  {
    name: "Swimming Session",
    description: "Supervised pool time for your furry friend",
    price: 999,
    duration: "30 minutes"
  },
  {
    name: "Pool Party Package",
    description: "Private pool session for up to 3 dogs",
    price: 2499,
    duration: "1 hour"
  }
];