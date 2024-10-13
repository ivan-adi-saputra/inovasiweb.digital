import baseResponse from "./baseResponse";

export interface SigninResponse extends baseResponse {
  data: {
    token: string;
    email: string;
  };
}

export interface SigninForm {
  email: string;
  password: string;
}

export interface SignupResponse extends baseResponse {
  data: SignupForm;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  phone?: string;
  company?: string;
}

export interface ActivateResponse extends baseResponse {
  data: ActivateForm;
}

export interface ActivateForm {
  email: string;
  otp: string;
}
