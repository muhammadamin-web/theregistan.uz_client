import axios, { AxiosResponse } from "axios";

export const register = (
  firstname?: string, // Declare firstname as a string
  phone?: string, // Declare phone as a string
  password?: string // Declare password as a string
): Promise<AxiosResponse> => {
  return axios.post("/api/user/signup", {
    firstname,
    phone,
    password,
  });
};

export const login = (
  phone: string, // Declare phone as a string
  password: string // Declare password as a string
): Promise<AxiosResponse> => {
  return axios.post("/api/user/signin", {
    phone,
    password,
  });
};
