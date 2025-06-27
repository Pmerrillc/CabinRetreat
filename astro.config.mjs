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
  server: {
    headers: {
// "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: https://maps.gstatic.com https://maps.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://emailjs.com; frame-src https://www.google.com https://maps.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self' https://emailjs.com; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests;",
"Strict-Transport-Security": "max-age=31536000; includeSubDomains"
    }
  },
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