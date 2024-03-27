"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { IVariationProduct } from "@/interfaces/product";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const propsColumns = {
  enableSorting: false,
  enableHiding: false,
};

export const columnVariations: ColumnDef<IVariationProduct>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    ...propsColumns,
  },
  {
    id: "variation_name",
    accessorKey: "variation_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nama Variasi"
        className="uppercase"
      />
    ),
    size: 100,
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
    id: "qty",
    accessorKey: "qty",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="stok produk"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return (
        <div className="flex items-center gap-x-2">
          <span className="text-[14px]">
            {recordValue.qty} <span className="text-xs">pcs</span>
          </span>
          <Separator orientation="vertical" />
          {recordValue.qty > 20 ? (
            <Badge variant="success" className="rounded-md">
              Tersedia
            </Badge>
          ) : recordValue.qty < 20 ? (
            <Badge variant="warning" className="rounded-md">
              Stok Menipis
            </Badge>
          ) : recordValue.qty === 0 ? (
            <Badge variant="destructive" className="rounded-md">
              Stok habis
            </Badge>
          ) : null}
        </div>
      );
    },
  },
  {
    id: "image_url",
    accessorKey: "image_url",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="uppercase"
        title="Foto Product"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return (
        <div className="">
          <Image
            height="50"
            width="50"
            src={recordValue.image_url ?? ""}
            alt=""
          />
        </div>
      );
    },
  },
];
