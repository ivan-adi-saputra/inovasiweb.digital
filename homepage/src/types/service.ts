import baseResponse from "./baseResponse";

interface serviceForm {
  _id?: string;
  name: string;
  benefits?: [string];
  description?: string;
  price: number;
  isRecomended: boolean;
}

export default interface allServiceResponse extends baseResponse {
  data: serviceForm[];
}
