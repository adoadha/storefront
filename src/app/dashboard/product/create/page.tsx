import Button from "@/components/button/Button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const CreateProductPage = () => {
  return (
    <Card className="w-full">
      <div className="w-full ">
        <div className="flex flex-col mx-5">
          <div className="flex justify-between mt-5">
            <h1 className="text-[25px] font-semibold text-[#163A50]">
              Tambah Produk
            </h1>
            <div className="flex items-center gap-x-2">
              <Button className="px-2 rounded-md py-2 text-[14px] bg-[#4DACE0] text-white">
                Simpan
              </Button>
              <Separator orientation="vertical" />
              <XMarkIcon className="w-6 h-6" />
            </div>
          </div>
          <Separator orientation="horizontal" className="my-5" />
          <Tabs defaultValue="detail" className="flex gap-x-1">
            <TabsList className="flex flex-col w-1/4 bg-white rounded-none mt-11 ">
              <TabsTrigger
                value="detail"
                className="px-3 border border-slate-400 text-slate-400 "
              >
                Detail Produk
              </TabsTrigger>
              <TabsTrigger
                value="variasi"
                className="px-3 my-2 border border-slate-400 text-slate-400 "
              >
                Variasi
              </TabsTrigger>
              <TabsTrigger
                value="harga"
                className="border border-slate-400 text-slate-400 "
              >
                Harga Produk
              </TabsTrigger>
            </TabsList>
            <Separator orientation="vertical" />
            <div className="w-full">
              <TabsContent value="detail">
                <div className="flex flex-col">
                  <h1 className="text-[20px] font-semibold text-[#163A50]">
                    Tambah Produk
                  </h1>
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="w-1/2 ">
                        <h1 className="text-sm">Nama Produk</h1>
                        <h1 className="my-5 text-sm">Nama Produk</h1>
                      </div>
                      <div className="w-full bg-slate-200">
                        <Input type="email" placeholder="Email" />
                        <Input
                          type="ado"
                          placeholder="Email"
                          className="my-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="variasi">ado</TabsContent>
              <TabsContent value="harga">asas</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Card>
  );
};

export default CreateProductPage;
