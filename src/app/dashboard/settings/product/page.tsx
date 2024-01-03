"use client";
import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import Dashboard from "@/components/layout/Dashboard";
import { cn } from "@/lib/utils";
import {
  ComputerDesktopIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

enum TABS {
  PRODUCT = "product",
  STORE = "store",
}

const ProductSettings = () => {
  const [activeTab, setActiveTab] = useState(TABS.PRODUCT);

  let tabBody = (
    <div className="flex w-full">
      <div className="flex-col mt-2">
        <p className="text-[15px] text-[#45464E]">
          Setelah customer melakukan pembayaran, order akan dikirim dalam kurun
          waktu:
        </p>
        <div className="flex items-center mt-2 gap-x-3">
          <input
            id="stock"
            type="radio"
            name="stock"
            className="w-5 h-6 bg-gray-100 border-gray-300 text-[#4DACE0] focus:ring-2 focus:ring-[#4DACE0] active:bg-[#4DACE0] hover:bg-[#4DACE0]"
          />
          <div className="flex-col">
            <label htmlFor="stock" className=" text-[#163A50] font-semibold ">
              Selalu ada stock
            </label>
            <p className="text-[15px] text-[#45464E]">
              Produk ini SELALU tersedia untuk dipesan
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 gap-x-3">
          <input
            id="stock"
            type="radio"
            name="stock"
            className="w-5 h-6 bg-gray-100 border-gray-300 text-[#4DACE0] focus:ring-2 focus:ring-[#4DACE0] active:bg-[#4DACE0] hover:bg-[#4DACE0]"
          />
          <div className="flex-col">
            <label htmlFor="stock" className=" text-[#163A50] font-semibold ">
              Selalu ada stock
            </label>
            <p className="text-[15px] text-[#45464E]">
              Produk ini tersedia untuk dipesan berdasarkan stok produk. Kamu
              dapat mengelola stok produk di sub menu Inventaris.
            </p>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-[15px] text-[#45464E] my-3">
            Ketika Tidak ada Stok gunakan :
          </p>
          <div className="flex gap-x-4">
            <Button className="px-3 py-5 rounded-md h-[30px] text-[14px]">
              PRE-ORDER (PO)
            </Button>
            <Button className="px-3 py-5 bg-[#F8FBFF] text-[#45464E] hover:bg-[#F8FBFF] rounded-md h-[30px] text-[14px]">
              WAITING LIST
            </Button>
            <Button className="px-3 py-5 bg-[#F8FBFF] text-[#45464E] hover:bg-[#F8FBFF] rounded-md h-[30px] text-[14px]">
              HABIS TERJUAL
            </Button>
          </div>
        </div>
        <div className="flex-col my-4">
          <p className="text-[15px] text-[#45464E] my-3">
            Setelah customer melakukan pembayaran, produk akan dikirim dalam:
          </p>
          <div className="flex gap-x-4">
            <Button className="px-3 py-5 rounded-md h-[30px] text-[14px]">
              24 JAM
            </Button>
            <Button className="px-3 py-5 bg-[#F8FBFF] text-[#45464E] hover:bg-[#F8FBFF] rounded-md h-[30px] text-[14px]">
              48 JAM
            </Button>
            <Button className="px-3 py-5 bg-[#F8FBFF] text-[#45464E] hover:bg-[#F8FBFF] rounded-md h-[30px] text-[14px]">
              3 HARI
            </Button>
          </div>
        </div>
        <div className="flex items-center mt-2 gap-x-3">
          <input
            id="stock"
            type="radio"
            name="stock"
            className="w-5 h-6 bg-gray-100 border-gray-300 text-[#4DACE0] focus:ring-2 focus:ring-[#4DACE0] active:bg-[#4DACE0] hover:bg-[#4DACE0]"
          />
          <div className="flex-col">
            <label htmlFor="stock" className=" text-[#163A50] font-semibold ">
              Pre - Order (PO)
            </label>
            <p className="text-[15px] text-[#45464E]">
              Produk ini dijual sebagai `Pre-order (PO)`
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 gap-x-3">
          <input
            id="stock"
            type="radio"
            name="stock"
            className="w-5 h-6 bg-gray-100 border-gray-300 text-[#4DACE0] focus:ring-2 focus:ring-[#4DACE0] active:bg-[#4DACE0] hover:bg-[#4DACE0]"
          />
          <div className="flex-col">
            <label htmlFor="stock" className=" text-[#163A50] font-semibold ">
              Waiting List
            </label>
            <p className="text-[15px] text-[#45464E]">
              Customer tergabung dalam Waiting List. Kamu dapat mengubahnya
              menjadi Order Baru.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (activeTab === TABS.STORE) {
    tabBody = <div>ado wani</div>;
  }
  return (
    <Dashboard>
      <div className="w-full">
        <CardBase className="my-5">
          <h1 className="text-[30px] text-nile-blue">Pengaturan</h1>
          <div className="flex gap-4 my-5">
            <div className="w-[200px]">
              <div
                className={cn(
                  "my-2 flex h-[50px] w-[200px] items-center gap-x-2 rounded-xl bg-[#F8FBFF]  text-center text-nile-blue",
                  {
                    "bg-picton-blue  text-white": activeTab === TABS.PRODUCT,
                  }
                )}
                onClick={() => setActiveTab(TABS.PRODUCT)}
              >
                <DeviceTabletIcon className="items-center w-5 h-6 ml-6 text-ming" />
                <p>Product</p>
              </div>
              <div
                className={cn(
                  "my-2 flex h-[50px] w-[200px] items-center gap-x-2 rounded-xl bg-[#F8FBFF]  text-center text-nile-blue",
                  {
                    "bg-picton-blue  text-white": activeTab === TABS.STORE,
                  }
                )}
                onClick={() => setActiveTab(TABS.STORE)}
              >
                <DeviceTabletIcon className="items-center w-5 h-6 ml-6 text-ming" />
                <p>Store</p>
              </div>
            </div>
            <div className="flex w-full mx-5 ">{tabBody}</div>
          </div>
        </CardBase>
      </div>
    </Dashboard>
  );
};

export default ProductSettings;
