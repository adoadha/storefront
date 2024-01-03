import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import InputText from "@/components/form/InputText";
import Dashboard from "@/components/layout/Dashboard";
import SwitchToogle from "@/components/switch/SwitchToogle";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Caesar_Dressing } from "next/font/google";
import React from "react";

const page = () => {
  return (
    <Dashboard>
      <div className="flex-col w-full">
        <div className="my-3 ">
          <h1 className="text-[30px] text-nile-blue">Kurir</h1>
          <p className="text-[14px] text-gravel font-semibold">
            kelola dan aktifkan jasa pengiriman di toko doa ibumu
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-2">
          <div className="">
            <CardBase>
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4" />
                <h1 className="text-gravel text-[15px]">
                  Informasi Alamat Pengiriman Anda
                </h1>
              </div>
              <div className="flex-col my-3">
                <label htmlFor="province" className="text-[13px]">
                  Provinsi
                </label>
                <select
                  id="province"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gravel focus:border-gravel block w-full p-2.5"
                >
                  <option className="rounded-xl" value="font-sora">
                    Jawa Barat
                  </option>
                </select>
                <label htmlFor="city" className="text-[13px] mt-3">
                  City
                </label>
                <select
                  id="city"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gravel focus:border-gravel block w-full p-2.5"
                >
                  <option className="rounded-xl" value="font-sora">
                    Cimahi
                  </option>
                  <option value="font-poppins">Bandung Barat</option>
                </select>
                <label htmlFor="province" className="text-[13px] mt-3">
                  Provinsi
                </label>
                <select
                  id="province"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gravel focus:border-gravel block w-full p-2.5"
                >
                  <option className="rounded-xl" value="font-sora">
                    Jawa Barat
                  </option>
                  <option value="font-poppins">Jawa Tengah</option>
                </select>
              </div>
            </CardBase>
          </div>
          <div className="">
            <CardBase>
              <div className="flex">
                <ChevronRightIcon className="w-4 h-4" />
                <h1 className="text-gravel text-[15px]">Doa Ibu Shipment</h1>
              </div>
              <div className="flex flex-col mx-5 mt-4">
                <div className="flex">
                  <SwitchToogle />
                  <span className="text-[15px] text-gravel">Show Eta</span>
                </div>
                <div className="flex my-3">
                  <SwitchToogle />
                  <span className="text-[15px] text-gravel">
                    Shipping Insurance
                  </span>
                </div>
                <div className="flex">
                  <SwitchToogle />
                  <span className="text-[15px] text-gravel">Multi Origin</span>
                </div>
              </div>
            </CardBase>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default page;
