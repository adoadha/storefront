"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Table } from "@tanstack/react-table";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  isShowCreateButton?: boolean;
  isLink?: boolean;
  hrefCreatePage?: string;
  onClickAction?: () => void;
}

export function DataTableViewOptions<TData>({
  table,
  isShowCreateButton = false,
  isLink,
  hrefCreatePage = "",
  onClickAction,
}: DataTableViewOptionsProps<TData>) {
  return (
    <div className="flex items-center space-x-2">
      {isShowCreateButton && (
        <>
          {isLink ? (
            <Link
              className="hidden h-8 ml-auto lg:flex"
              href={hrefCreatePage as string}
            >
              <Button
                variant="outline"
                size="default"
                className="hidden h-8 ml-auto lg:flex"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Tambah
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="default"
              className="hidden h-8 ml-auto lg:flex"
              onClick={onClickAction}
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Tambah
            </Button>
          )}
        </>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="hidden h-8 ml-auto lg:flex"
          >
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id.replace("_", " ")}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
