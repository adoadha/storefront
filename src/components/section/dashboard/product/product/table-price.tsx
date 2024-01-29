import { DataTable } from "@/components/commons/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { IVariationProduct } from "@/interfaces/product";
import React from "react";
import { columnVariations } from "./column";
import { columnPrice } from "./column-price";

type TablePriceProps = {
  data: IVariationProduct[];
  isLoading?: boolean;
};

export default function TablePrice({ data, isLoading }: TablePriceProps) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(4).fill({}) : data),
    [isLoading, data]
  );

  const columnsMemo = React.useMemo(
    () =>
      isLoading
        ? columnPrice.map((column) => ({
            ...column,
            cell() {
              return <Skeleton className="w-full h-4" />;
            },
          }))
        : columnPrice,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, columnVariations]
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
