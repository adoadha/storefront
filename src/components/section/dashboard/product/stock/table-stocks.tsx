import { DataTable } from "@/components/commons/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { IStock, IVariationProduct } from "@/interfaces/product";
import React from "react";
import { columnStocks } from "./column";

type TableAllProductStocksProps = {
  data: IStock[];
  isLoading?: boolean;
};

export default function TableAllProductStocks({
  data,
  isLoading,
}: TableAllProductStocksProps) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(4).fill({}) : data),
    [isLoading, data]
  );

  const columnsMemo = React.useMemo(
    () =>
      isLoading
        ? columnStocks.map((column) => ({
            ...column,
            cell() {
              return <Skeleton className="w-full h-4" />;
            },
          }))
        : columnStocks,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, columnStocks]
  );
  return (
    <div className="w-full">
      <DataTable
        columns={columnsMemo}
        data={tableData}
        showPagination={false}
      />
    </div>
  );
}
