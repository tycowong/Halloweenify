import { defineCollection, z } from "astro:content";

const halloween_promts = defineCollection({
  schema: z.object({
    name: z.string(),
    imgUrl: z.string(),
    alt: z.string(),
    prompt: z.string(),
  }),
});

export const collections = { halloween_promts };
