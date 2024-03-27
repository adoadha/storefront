"use client";
import TableAllProductStocks from "@/components/section/dashboard/product/stock/table-stocks";
import { Card } from "@/components/ui/card";
import { getAllStocks } from "@/service/http/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const StocksPage = () => {
  const queryGetStocks = useQuery({
    queryKey: ["getAllStocks", {}],
    queryFn: getAllStocks,
  });
  return (
    <div className="w-full">
      <Card>
        <TableAllProductStocks
          data={queryGetStocks.data?.data || []}
          isLoading={queryGetStocks.isLoading}
        />
      </Card>
    </div>
  );
};

export default StocksPage;
