import { baseResponse } from "./baseResponse";

export interface allServiceResponse extends baseResponse {
  data: serviceForm[];
}

export interface serviceResponse extends baseResponse {
  data: serviceForm;
}

export interface serviceForm {
  _id?: string;
  name: string;
  benefits: string[];
  price: number;
  isRecomended: boolean;
  description?: string;
}
