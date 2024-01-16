"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { ICategory } from "@/types/product";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnCategory: ColumnDef<ICategory>[] = [
  {
    id: "id",
    accessorKey: "id",
    size: 20,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" className="w-[250px]" />
    ),
    ...propsColumns,
  },
  {
    id: "category_name",
    accessorKey: "category_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Kategori" />
    ),
    ...propsColumns,
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deskripsi" />
    ),
    size: 60,
    ...propsColumns,
  },
];
