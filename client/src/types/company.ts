import { baseResponse } from "./baseResponse";
import { imageForm } from "./image";

export interface allCompanyResponse extends baseResponse {
  data: companyResponse[];
}

export interface companyResponse extends baseResponse {
  data: companyResponse;
}

export interface companyForm {
  name: string;
  image: string;
  description?: string;
}

export interface companyResponse {
  _id: string;
  name: string;
  image: imageForm;
  description?: string;
}
