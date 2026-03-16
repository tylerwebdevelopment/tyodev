import z from "zod";

export const CreateProjectSchema = z.object({
  name: z.string().nonempty('Project Name Is Required'),
  description: z.string().nonempty('Project Description Is Required'),
  imageUrl: z.url().optional(),
  status: z.enum(['DEVELOPMENT', 'COMPLETED', 'LIVE']).optional(),
  category: z.enum(['PROJECT', 'COMPONENT', 'EXPERIMENT', 'DESIGN', 'OTHER']),
  tags: z.array(z.object({name: z.string() })).optional(),
  githubUrl: z.url().optional(),
  liveUrl: z.url().optional(),
  featured: z.boolean().optional(),
});

export const UpdateProjectSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.url().optional(),
  status: z.enum(['DEVELOPMENT', 'COMPLETED', 'LIVE']).optional(),
  category: z.enum(['PROJECT', 'COMPONENT', 'EXPERIMENT', 'DESIGN', 'OTHER']).optional(),
  tags: z.array(z.object({name: z.string() })).optional(),
  githubUrl: z.url().optional(),
  liveUrl: z.url().optional(),
  featured: z.boolean().optional(),
})