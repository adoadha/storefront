import { ProductType } from "@/interfaces/product";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface CardProductProps {
  data: ProductType[];
  isLoading: boolean;
}

const CardProduct = ({ data, isLoading }: CardProductProps) => {
  if (isLoading) {
    return (
      <>
        <div className="flex flex-wrap gap-3">
          <Skeleton className="w-[200px] h-[250px] border border-[#DEDEDE]  bg-slate-100 rounded-none" />
          <Skeleton className="w-[200px] h-[250px] border border-[#DEDEDE]  bg-slate-100 rounded-none" />
          <Skeleton className="w-[200px] h-[250px] border border-[#DEDEDE]  bg-slate-100 rounded-none " />
          <Skeleton className="w-[200px] h-[250px] border border-[#DEDEDE]  bg-slate-100 rounded-none" />
          <Skeleton className="w-[200px] h-[250px] border border-[#DEDEDE]  bg-slate-100 rounded-none" />
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-wrap gap-3">
      {data.map((value) => (
        <div
          className="w-[200px] h-[250px] border border-[#DEDEDE]  flex flex-col"
          key={value.id}
        >
          <div className="flex items-center justify-between mx-2 my-2">
            <input
              id=""
              type="checkbox"
              value=""
              className="w-4 h-4 text-picton-blue bg-[#DEDEDE] border-[#DEDEDE] "
            />
            <EllipsisVerticalIcon className="w-5 h-5" />
          </div>
          <div className="flex justify-center my-3">
            <Link href={`dashboard/product/${value.id}/${value.title}`}>
              <Image height="180" width="150" src="/sendal.png" alt="" />
            </Link>
          </div>
          <div className="flex mx-3">
            <h1 className="text-[#163A50] text-[12px] text-left font-semibold line-clamp-1">
              {value.title}
            </h1>
          </div>
          <div className="mt-1">
            <Badge className="mx-2" variant="outline">
              <span className="text-[10px] text-[#163A50]">
                {value.category}
              </span>
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
