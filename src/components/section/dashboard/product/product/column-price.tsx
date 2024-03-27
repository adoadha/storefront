"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/commons/data-table/data-table-column";
import { IVariationProduct } from "@/interfaces/product";
import { currencyFormat } from "@/lib/currency";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    id: "hpp",
    accessorKey: "hpp",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="uppercase"
        title="HPP"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return <span>{currencyFormat(recordValue.hpp)}</span>;
    },
  },

  {
    id: "grosir_price",
    accessorKey: "grosir_price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="uppercase"
        title="Harga grosir"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return <span>{currencyFormat(recordValue.grosir_price)}</span>;
    },
  },
  {
    id: "price",
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Harga Normal"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return <span>{currencyFormat(recordValue.price)}</span>;
    },
  },
  {
    id: "slash_price",
    accessorKey: "slash_price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Harga Diskon"
        className="uppercase"
      />
    ),
    size: 60,
    ...propsColumns,
    cell: ({ row }) => {
      const recordValue = row.original || ({} as IVariationProduct);

      return (
        <div className="">
          {recordValue.slash_price === null ? (
            <Badge variant="destructive" className="rounded-md">
              Tidak sedang diskon
            </Badge>
          ) : (
            <div className="flex items-center gap-x-2">
              <span>{currencyFormat(recordValue.slash_price)}</span>|
              <Badge variant="success" className="rounded-md">
                Diskon berjalan
              </Badge>
            </div>
          )}
        </div>
      );
    },
  },
];
