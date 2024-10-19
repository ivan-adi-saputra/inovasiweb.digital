import { baseResponse } from "./baseResponse";

export interface imageResponse extends baseResponse {
  data: {
    _id: string;
    name: string;
  };
}
