import { ICategory } from "@/types/product";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/commons/data-table";
import { columnVariations } from "./column";
import { IVariationProduct } from "@/interfaces/product";

type TableVariationsProps = {
  data: IVariationProduct[];
  isLoading?: boolean;
};

export default function TableVariations({
  data,
  isLoading,
}: TableVariationsProps) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(4).fill({}) : data),
    [isLoading, data]
  );

  const columnsMemo = React.useMemo(
    () =>
      isLoading
        ? columnVariations.map((column) => ({
            ...column,
            cell() {
              return <Skeleton className="w-full h-4" />;
            },
          }))
        : columnVariations,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, columnVariations]
  );
  return (
    <div className="">
      <DataTable
        columns={columnsMemo}
        data={tableData}
        showPagination={false}
      />
    </div>
  );
}
