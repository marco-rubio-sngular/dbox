import axios from "axios";

const BASE_URL: string =
  (import.meta.env.VITE_API_ENDPOINT as string) !== undefined
    ? import.meta.env.VITE_API_ENDPOINT
    : "http://localhost:3000/api/v1";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email: string, password: string) => {
  const payload = {
    email,
    password,
  };

  const response = await instance.post("/login", payload);

  return response.data;
};
