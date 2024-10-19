import { baseResponse } from "./baseResponse";

export interface allCompanyResponse extends baseResponse {
  data: companyForm[];
}

export interface companyResponse extends baseResponse {
  data: companyForm;
}

export interface companyForm {
  name: string;
  image: string;
  description?: string;
}
