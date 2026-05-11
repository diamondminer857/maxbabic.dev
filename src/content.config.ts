import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    category: z.string(),
    tech: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

export const collections = { blog, projects };
