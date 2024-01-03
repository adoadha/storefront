"use client";
import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import CardListProduct from "@/components/card/CardListProduct";
import CardProduct from "@/components/card/CardProduct";
import InputText from "@/components/form/InputText";
import Dashboard from "@/components/layout/Dashboard";
import { Bars4Icon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import axios from "axios";
import { ProductType } from "@/interfaces/product";
import { useQuery } from "@tanstack/react-query";
import BoxIcon from "@/components/icons/BoxIcon";

const getProduct = async () => {
  const result = await axios.get("https://fakestoreapi.com/products");

  return result.data as ProductType[];
};

const AllProduct = () => {
  const [toggle, setToogle] = useState("grid");

  const { data: productData, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
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
              {/* <label
                  htmlFor="Toggle3"
                  className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
                >
                  <input id="Toggle3" type="checkbox" className="hidden peer" />
                  <span className="px-4 py-2 rounded-l-md dark:bg-picton-blue peer-checked:dark:bg-[#F8FBFF]">
                    <BoxIcon className="w-5 h-5" />
                  </span>
                  <span className="px-4 py-2 rounded-r-md dark:bg-[#F8FBFF] peer-checked:dark:bg-picton-blue">
                    <Bars4Icon className="w-5 h-5" />
                  </span>
                </label> */}
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
              data={productData || []}
              isLoading={isLoadingProduct}
            />
          ) : (
            <CardListProduct
              data={productData || []}
              // isLoading={isLoadingProduct}
            />
          )}
        </div>
      </CardBase>
    </div>
  );
};

export default AllProduct;
