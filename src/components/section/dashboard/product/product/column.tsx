"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { IVariationProduct } from "@/interfaces/product";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnVariations: ColumnDef<IVariationProduct>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
    ...propsColumns,
  },
  {
    id: "variation_name",
    accessorKey: "variation_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Variasi" />
    ),
    ...propsColumns,
  },
  {
    id: "variation_sku",
    accessorKey: "variation_sku",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No SKU" />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "variation_sku",
    accessorKey: "variation_sku",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No SKU" />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "price",
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Harga" />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "variation_stock",
    accessorKey: "variation_stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="stok produk" />
    ),
    size: 60,
    ...propsColumns,
  },
  {
    id: "image_url",
    accessorKey: "image_url",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Foto Product" />
    ),
    size: 60,
    ...propsColumns,
  },
];
