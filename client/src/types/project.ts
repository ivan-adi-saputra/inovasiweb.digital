import { baseResponse } from "./baseResponse";

export interface allProjectResponse extends baseResponse {
  data: ProjectResponse[];
}

export interface projectResponse extends baseResponse {
  data: ProjectResponse;
}

export interface ProjectBase {
  name: string;
  date?: Date | null;
  features?: string[];
  description?: string;
}

export interface ProjectResponse extends ProjectBase {
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
