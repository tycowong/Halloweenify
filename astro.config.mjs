import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import fulldev from "fulldev-ui/integration";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    fulldev({
      colors: {
        theme: "dark",
        dark: {
          background: "#302D1D",
          base: "#A0406A",
          brand: "#E89523",
        },
        light: {
          background: "#302D1D",
          base: "#A0406A",
          brand: "#E89523",
        },
      },
    }),
  ],
});
