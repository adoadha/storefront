import { ICustomer } from "@/interfaces/customer";
import React from "react";
import { columnsCustomer } from "./column";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/commons/data-table";

type TableCustomerProps = {
  data: ICustomer[];
  isLoading?: boolean;
};

export default function TableCustomer({ data, isLoading }: TableCustomerProps) {
  const tableData = React.useMemo(
    () => (isLoading ? Array(4).fill({}) : data),
    [isLoading, data]
  );

  const columnsMemo = React.useMemo(
    () =>
      isLoading
        ? columnsCustomer.map((column) => ({
            ...column,
            cell() {
              return <Skeleton className="w-full h-4" />;
            },
          }))
        : columnsCustomer,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, columnsCustomer]
  );
  return (
    <div className="w-full">
      <DataTable columns={columnsMemo} data={tableData} showPagination={true} />
    </div>
  );
}
