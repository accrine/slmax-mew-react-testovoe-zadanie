import { Paginated, ParsedProduct } from "@/types/client";
import {
  FetchProductResponse,
  Pagination,
  ServerProducts,
} from "@/types/server";
import { parseProduct } from "@/utils";
import axios from "axios";

export const apiURL = `http://${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}/api`;

const axiosConfig = axios.create({
  baseURL: apiURL,
});

export const fetchProducts = async (): Promise<Paginated<ParsedProduct>> => {
  const response = await axiosConfig.get<ServerProducts>(`products?populate=*`);
  return {
    pagination: response.data.meta.pagination,
    data: response.data.data.map((product) => parseProduct(product)),
  };
};
export const fetchProduct = async (
  documentId: string
): Promise<ParsedProduct> => {
  const response = await axiosConfig.get<FetchProductResponse>(
    `products/${documentId}?populate=*`
  );
  return parseProduct(response.data.data);
};
