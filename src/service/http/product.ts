import { ICategory } from "@/types/product";
import { QueryFunctionContext } from "@tanstack/react-query";
import apiInstance from "./api-instance";
import { BaseResponse } from "@/types";

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

  console.log(response.data, "HOLA");

  return response.data;
};
