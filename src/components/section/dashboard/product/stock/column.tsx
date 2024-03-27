"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { ICategory } from "@/types/product";
import { IStock } from "@/interfaces/product";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnStocks: ColumnDef<IStock>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" className="uppercase" />
    ),
    ...propsColumns,
  },
  {
    id: "variation_name",
    accessorKey: "variation_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nama Produk"
        className="uppercase"
      />
    ),
    ...propsColumns,
  },
  {
    id: "variation_sku",
    accessorKey: "variation_sku",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="NO SKU"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "price",
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Harga Produk"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "qty",
    accessorKey: "qty",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Jumlah Stock"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
];
