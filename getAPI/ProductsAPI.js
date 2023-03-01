import axios from "axios";

const productsAPI = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export const getAllProducts = async () => {
  const res = await productsAPI.get("/products");
  return res.data;
};
