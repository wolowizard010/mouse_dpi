import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('MouseDPI Team'),
    authorRole: z.string().default('Hardware & Esports Analyst'),
    authorAvatar: z.string().optional(),
    authorBio: z.string().optional(),
    category: z.string().default('Guides'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readTime: z.string().default('8 min read'),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
