import { BaseResponse } from "@/types";
import { ICategory } from "@/types/product";
import { QueryFunctionContext } from "@tanstack/react-query";
import apiInstance from "./api-instance";
import { IALLProduct, IProduct } from "@/interfaces/product";

export const addCategory = async ({
  queryKey,
}: QueryFunctionContext): Promise<ICategory> => {
  try {
    const response = await apiInstance.post("/product/category");

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCategory = async ({
  queryKey,
}: QueryFunctionContext): Promise<BaseResponse<ICategory[]>> => {
  const [, params] = queryKey;
  const response = await apiInstance.get("/product/category", { params });

  return response.data;
};

export const getProducts = async ({
  queryKey,
}: QueryFunctionContext): Promise<BaseResponse<IALLProduct[]>> => {
  const [, params] = queryKey;

  const response = await apiInstance.get("/product", { params });

  return response.data;
};

export const getProductById = async ({
  queryKey,
}: QueryFunctionContext): Promise<BaseResponse<IProduct>> => {
  const [, ProductId] = queryKey;

  const response = await apiInstance.get<BaseResponse<IProduct>>(
    `/product/${ProductId}`
  );

  console.log(response.data, "service response");
  return response.data;
};
