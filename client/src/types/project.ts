import { baseResponse } from "./baseResponse";

export interface allProjectResponse extends baseResponse {
  data: Project[];
}

export interface projectResponse extends baseResponse {
  data: Project;
}

export interface ProjectBase {
  name: string;
  date?: Date | null;
  features?: string[];
  description?: string;
}

export interface Project extends ProjectBase {
  service: {
    _id: string;
    name: string;
  };

  image?: {
    _id: string;
    name: string;
  };
}

export interface ProjectForm extends ProjectBase {
  service: string;
  image?: string;
}
