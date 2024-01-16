"use client";
import { Card } from "@/components/ui/card";

import CardAddCategory from "@/components/section/dashboard/product/category/CardAddCategory";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/service/http/product";
import TableCategory from "@/components/section/dashboard/product/category/table-category";

const CategoryPage = () => {
  const queryGetCategory = useQuery({
    queryKey: ["getCategory", {}],
    queryFn: getCategory,
  });

  return (
    <div className="w-full">
      <h1 className="text-[25px] text-[#163A50] my-2">Category Product</h1>
      <div className="flex gap-x-5">
        <div className="flex w-[32rem]">
          <Card className="w-full">
            <div className="flex flex-col mx-2">
              <h2 className="font-semibold text-md text-[#163A50] my-5">
                Add Category
              </h2>
              <div className="py-3">
                <CardAddCategory />
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full">
          <Card className="w-full">
            <div className="">
              <TableCategory
                data={queryGetCategory.data?.data || []}
                isLoading={queryGetCategory.isLoading}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
