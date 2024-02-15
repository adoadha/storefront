import { BaseResponse } from "@/types";
import { QueryFunctionContext } from "@tanstack/react-query";
import apiInstance from "./api-instance";
import { ICustomer } from "@/interfaces/customer";

export const getCustomer = async ({
  queryKey,
}: QueryFunctionContext): Promise<BaseResponse<ICustomer[]>> => {
  const [, params] = queryKey;
  const response = await apiInstance.get("/customer", { params });

  return response.data;
};
