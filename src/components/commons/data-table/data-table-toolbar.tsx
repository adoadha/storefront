"use client";

import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted.filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  isShowCreateButton?: boolean;
  isLink?: boolean;
  hrefCreatePage?: string;
  onClickAction?: () => void;
  status?: { label: string; value: string }[];
}

export function DataTableToolbar<TData>({
  table,
  isShowCreateButton = false,
  isLink,
  status,
  hrefCreatePage,
  onClickAction,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Cari..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={status || []}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cog6ToothIcon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <DataTableViewOptions
        table={table}
        isLink={isLink}
        isShowCreateButton={isShowCreateButton}
        hrefCreatePage={hrefCreatePage}
        onClickAction={onClickAction}
      />
    </div>
  );
}
