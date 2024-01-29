"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { IVariationProduct } from "@/interfaces/product";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnPrice: ColumnDef<IVariationProduct>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    ...propsColumns,
  },
  {
    id: "variation_sku",
    accessorKey: "variation_sku",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="No SKU"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "HPP",
    accessorKey: "HPP",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="uppercase"
        title="HPP"
      />
    ),
    size: 60,
    ...propsColumns,
  },

  {
    id: "grosir_price",
    accessorKey: "grosir_price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="uppercase"
        title="Harga grosir / renceng"
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
        title="Harga"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
  },
];
