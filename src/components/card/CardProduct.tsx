import { IALLProduct, IProduct } from "@/interfaces/product";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CardProductProps {
  data: IALLProduct[];
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
          className="h-[280px] w-[200px] aspect-square border border-[#DEDEDE]  flex flex-col"
          key={value.product_id}
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
            <Link href={`/dashboard/product/${value.product_id}`}>
              <Image height="180" width="150" src="/sendal.png" alt="" />
            </Link>
          </div>
          <div className="flex mx-3">
            <h1 className="text-[#163A50] text-[13px] text-left font-semibold line-clamp-1">
              {value.product_name}
            </h1>
          </div>
          <div className="mt-1">
            <Badge className="mx-2" variant="outline">
              <span className="text-[10px] text-[#163A50]">
                {value.category_name}
              </span>
            </Badge>
          </div>
          <div className="my-1">
            {value.total_variations < 2 ? (
              <div className="">
                {value.variation_values.map((value) => (
                  <h1
                    key={value.product_id}
                    className="text-[#163A50]  mx-2 text-[12px] text-left font-semibold line-clamp-1"
                  >
                    {value.variation_sku}
                  </h1>
                ))}
              </div>
            ) : (
              <HoverCard>
                <HoverCardTrigger>
                  <h1 className="text-blue-500 mx-2 text-[12px] text-left font-semibold line-clamp-1">
                    Terdapat {value.total_variations} variasi
                  </h1>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-1/1">
                  {value.variation_values.map((value) => (
                    <div className="flex" key={value.product_id}>
                      <h1 className="text-[#163A50] text-[11px] text-left font-semibold line-clamp-1">
                        {value.variation_sku}
                      </h1>
                    </div>
                  ))}
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
