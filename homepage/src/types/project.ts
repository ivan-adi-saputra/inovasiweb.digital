import baseResponse from "./baseResponse";

interface clientForm {
  name: string;
}

interface serviceForm {
  name: string;
}

interface imageForm {
  name: string;
}

interface projectForm {
  service: serviceForm;
  client?: clientForm;
  name: string;
  date: string;
  image?: imageForm;
  features: [string];
  description?: string;
}

export default interface allProjectResponse extends baseResponse {
  data: projectForm[];
}
