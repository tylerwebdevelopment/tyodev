import {ProjectStatus, ProjectCategory} from '@/generated/prisma/client';


export interface TagInput{
  name: string;
}
export interface CreateProject{
  name: string;
  description: string;
  imageUrl?: string;
  status?: ProjectStatus;
  category?: ProjectCategory;
  tags?: TagInput[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean
}
export interface UpdateProject{
  name?: string;
  description?: string;
  imageUrl?: string;
  status?: ProjectStatus;
  category?: ProjectCategory;
  tags?: TagInput[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean
}