"use client";
import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import CardListProduct from "@/components/card/CardListProduct";
import CardProduct from "@/components/card/CardProduct";
import InputText from "@/components/form/InputText";
import BoxIcon from "@/components/icons/BoxIcon";
import { getProducts } from "@/service/http/product";
import { Bars4Icon, PlusIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const AllProduct = () => {
  const [toggle, setToogle] = useState("grid");

  const { data: productData, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });

  return (
    <div className="w-full">
      <CardBase className="my-5 ">
        <div className="flex-col mx-5">
          <h1 className="text-[25px] text-[#163A50]">All Product</h1>
          <div className="flex items-center">
            <div className="flex"></div>
            <div className="flex-1 "></div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-5">
          <div className="">
            <InputText
              id="search"
              className=""
              inputClassName="py-2 rounded-md"
              wrapperClassName="py-2 rounded-md"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-3 mr-4">
            <div className="flex items-center">
              <Button className="flex items-center rounded-xl px-3 py-2 text-[14px] bg-[#4DACE0] text-white">
                <PlusIcon className="w-4 h-4" />
                Tambah Product
              </Button>
            </div>
            <div className="">
              <button
                className="px-2 py-2 bg-slate-300 rounded-l-xl"
                onClick={() => setToogle("grid")}
              >
                <BoxIcon className="w-5 h-5" />
              </button>
              <button
                className="px-2 py-2 bg-slate-300 rounded-r-xl"
                onClick={() => setToogle("list")}
              >
                <Bars4Icon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          {toggle === "grid" ? (
            <CardProduct
              data={productData?.data || []}
              isLoading={isLoadingProduct}
            />
          ) : (
            //
            <h2>belum setup</h2>
          )}
        </div>
      </CardBase>
    </div>
  );
};

export default AllProduct;
