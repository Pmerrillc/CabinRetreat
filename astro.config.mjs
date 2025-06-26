// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: "server",
  image: {domains: ["cdn.sanity.io"]},
  site: 'https://www.cabin10.com',
  integrations: [
      mdx(), 
      sitemap(), 
      icon(), 
      sanity({
          projectId: 'peyprqn8',
          dataset: 'production',
          // Set useCdn to false if you're building statically.
          useCdn: false,
          studioBasePath: "/admin",
  }), 
	react()],

  adapter: vercel(),
});