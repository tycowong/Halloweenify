import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import fulldev from "fulldev-ui/integration";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
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
