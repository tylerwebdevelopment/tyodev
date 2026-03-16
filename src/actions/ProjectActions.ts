import { CreateProject, UpdateProject } from "@/lib/types/ProjectTypes";
import { prisma } from "@/prisma/client";

export const createProject = async (data : CreateProject) => {
  const {tags, ...rest} = data;

  return await prisma.project.create({
    data: {
      ...rest,
      tags: {
        connectOrCreate: tags?.map(tag => ({
          where: {name: tag.name},
          create: {name: tag.name},
        })) || [],
      },
    },
    include: {tags: true},
  });
}

export const updateProject = async (id: string, data:UpdateProject) => {
  const {tags, ...rest} = data;

  return await prisma.project.update({
    where: {id},
    data: {
      ...rest,
      ...(tags && {
        tags: {
          set: [],
          connectOrCreate: tags.map(tag => ({
            where: {name: tag.name},
            create: {name: tag.name},
          })),
        },
      }),
    },
    include: {tags: true}
  });
}


export const deleteProject = async (id: string) => {
  return await prisma.project.delete({
    where: {id},
    include: {tags: true},
  });
}

export const getProjects = async () => {
  return await prisma.project.findMany({
    include: {tags: true},
    orderBy: {createdAt: 'desc'},
  });
}

export const getProjectById = async (id: string) => {
  return await prisma.project.findUnique({
    where: {id},
    include: {tags: true},
  })
}