"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { ICustomer } from "@/interfaces/customer";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnsCustomer: ColumnDef<ICustomer>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
    ...propsColumns,
  },
  {
    id: "customer_name",
    accessorKey: "customer_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nama Pelanggan"
        className="uppercase"
      />
    ),
    size: 100,
    ...propsColumns,
  },
  {
    id: "customer_phone",
    accessorKey: "customer_phone",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No HP"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "customer_email",
    accessorKey: "customer_email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Email"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
];
