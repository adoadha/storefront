import { ProductType } from "@/interfaces/product";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

interface CardListProductProps {
  data?: ProductType[];
  isLoading?: boolean;
}

const CardListProduct = ({ data, isLoading }: CardListProductProps) => {
  if (isLoading) {
    return (
      <>
        <Skeleton className="h-32 bg-slate-600 rounded-[15px]" />
        <Skeleton className="h-32 bg-slate-600 rounded-[15px]" />
      </>
    );
  }
  return (
    <div className="w-full">
      <Table className="">
        <TableHeader className="">
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Nama Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((value) => (
            <TableRow key={value.id}>
              <TableCell className="font-medium">{value.id}</TableCell>
              <TableCell>{value.title}</TableCell>
              <TableCell>{value.price}</TableCell>
              <TableCell className="">{value.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CardListProduct;
