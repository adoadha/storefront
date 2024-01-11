import { BaseResponse } from "@/types";
import { ICategory } from "@/types/product";
import { QueryFunctionContext } from "@tanstack/react-query";
import apiInstance from "./api-instance";

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
