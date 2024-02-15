"use client";
import TableCustomer from "@/components/section/dashboard/customer/table-customer";
import { Card } from "@/components/ui/card";
import { getCustomer } from "@/service/http/customer";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CustomerPage = () => {
  const queryGetCustomer = useQuery({
    queryKey: ["getCustomer", {}],
    queryFn: getCustomer,
  });
  return (
    <div className="w-full">
      <Card className="my-2 rounded-md">
        <div className="flex flex-col mx-5">
          <h1 className="text-[25px] my-2 font-semibold text-[#163A50]">
            Pengguna
          </h1>
          <div className="my-5">
            <TableCustomer
              data={queryGetCustomer.data?.data || []}
              isLoading={queryGetCustomer.isLoading}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomerPage;
