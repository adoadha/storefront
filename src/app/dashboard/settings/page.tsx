"use client";
import CardBase from "@/components/card/CardBase";
import StoreIcon from "@/components/icons/StoreIcon";
import Dashboard from "@/components/layout/Dashboard";
import {
  CreditCardIcon,
  CubeIcon,
  LinkIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const settings = () => {
  return (
    <>
      <div className="w-full">
        <div className="my-3 ">
          <h1 className="text-[30px]  text-nile-blue">Pengaturan</h1>
        </div>
        <div className="my-2">
          <div className="grid grid-cols-4 gap-3">
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="#">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <StoreIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">Toko</h1>
                      <p className="text-[12px] text-nile-blue">
                        Kelola data profil toko doa ibumu
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="settings/payment">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <CreditCardIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">Pembayaran</h1>
                      <p className="text-[12px] text-nile-blue">
                        Kelola channel pembayaran tokomu
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="settings/courier">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <TruckIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">Kurir</h1>
                      <p className="text-[12px] text-nile-blue">
                        Aktifkan kurir pengirimanmu
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="settings/product">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <CubeIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">Produk</h1>
                      <p className="text-[12px] text-nile-blue">
                        Kelola produk secara global
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="grid grid-cols-4 gap-3">
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="#">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <LinkIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">
                        Custom Domain
                      </h1>
                      <p className="text-[12px] text-nile-blue">
                        Ubah domain sesuai keinginanmu
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
            <div className="">
              <CardBase className="shadow-lg">
                <Link href="#">
                  <div className="flex items-center justify-center py-2 gap-x-2">
                    <UsersIcon className="w-10 h-10 text-nile-blue" />
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="text-[20px] text-nile-blue">Pengguna</h1>
                      <p className="text-[12px] text-nile-blue">
                        Kelola akses pengguna di tokomu
                      </p>
                    </div>
                  </div>
                </Link>
              </CardBase>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;
