import { baseResponse } from "./baseResponse";

export interface imageResponse extends baseResponse {
  data: imageForm;
}

export interface imageForm {
  _id: string;
  name: string;
}
