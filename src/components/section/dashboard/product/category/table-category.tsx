import { ICategory } from "@/types/product";
import React from "react";
import { columnCategory } from "./column";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/commons/data-table";

type TableCatagoryProps = {
  data: ICategory[];
  isLoading: boolean;
};

export default function TableCategory({ data, isLoading }: TableCatagoryProps) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(4).fill({}) : data),
    [isLoading, data]
  );

  const columnsMemo = React.useMemo(
    () =>
      isLoading
        ? columnCategory.map((column) => ({
            ...column,
            cell() {
              return <Skeleton className="w-full h-4" />;
            },
          }))
        : columnCategory,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, columnCategory]
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
