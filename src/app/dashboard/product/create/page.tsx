import Button from "@/components/button/Button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CardTabsDetail from "@/components/section/dashboard/product/create/CardTabsDetail";
import CardTabsImage from "@/components/section/dashboard/product/create/CardTabsImage";
import Link from "next/link";
import CardTabsVariation from "@/components/section/dashboard/product/create/CardTabsVariation";

const CreateProductPage = () => {
  return (
    <div className="w-full h-full my-5">
      <Card className="w-full h-full">
        <div className="flex flex-col h-full mx-5">
          <div className="flex justify-between mt-5 ">
            <h1 className="text-[25px] font-semibold text-[#163A50]">
              Tambah Produk
            </h1>
            <div className="flex items-center gap-x-2">
              <Button className="px-2 rounded-md py-2 text-[14px] bg-[#4DACE0] text-white">
                Simpan
              </Button>
              <Separator orientation="vertical" />
              <Link href={"dashboard/product/"}>
                <XMarkIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <Separator orientation="horizontal" className="mt-2" />
          <Tabs defaultValue="detail" className="w-full h-full">
            <div className="grid h-full grid-cols-12 gap-1">
              <div className="col-span-3 border-r border-bg-border">
                <TabsList className="flex flex-col justify-start h-full pr-4 mt-5 bg-inherit">
                  <TabsTrigger
                    value="detail"
                    className="w-full border border-slate-400 text-slate-400"
                  >
                    Detail Produk
                  </TabsTrigger>
                  <TabsTrigger
                    value="gambar"
                    className="w-full my-2 border border-slate-400 text-slate-400 "
                  >
                    Gambar Produk
                  </TabsTrigger>
                  <TabsTrigger
                    value="variation"
                    className="w-full my-2 border border-slate-400 text-slate-400 "
                  >
                    Variasi
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="col-span-9">
                <TabsContent value="detail">
                  <CardTabsDetail />
                </TabsContent>
                <TabsContent value="gambar">
                  <CardTabsImage />
                </TabsContent>
                <TabsContent value="variation">
                  <CardTabsVariation />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default CreateProductPage;
