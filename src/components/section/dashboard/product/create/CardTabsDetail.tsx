"use client";
import Button from "@/components/button/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/24/outline";

const JENISPRODUCT = [
  {
    value: "owned",
    label: "Product Sendiri",
  },
  {
    value: "konsiniyasi",
    label: "Konsiniyasi",
  },
];

const CardTabsDetail = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-col">
      <h1 className="text-[20px] ml-5 font-semibold text-[#163A50]">
        Informasi Produk
      </h1>
      <div className="flex flex-col my-5">
        {/* nama produk */}
        <div className="flex ">
          <div className="flex items-center justify-center w-1/3">
            <h1 className="text-sm font-semibold">
              Nama Produk<span className="text-red-500">*</span>
            </h1>
          </div>
          <div className="w-full px-4">
            <Input type="email" placeholder="Nama Produk" />
          </div>
        </div>
        {/* kategori */}
        {/* tambahkan conditional rendering ketika  */}
        <div className="flex my-3">
          <div className="flex items-center justify-start w-1/3 ">
            <h1 className="text-sm font-semibold ml-14">
              Jenis Product<span className="text-red-500">*</span>
            </h1>
          </div>
          <div className="flex flex-col w-full px-4">
            <Button className="w-[200px] py-2 px-2 text-[11px] border rounded-md border-bg-border">
              Pilih Kategori
            </Button>
          </div>
        </div>
        {/* tipe product */}
        <div className="flex my-2">
          <div className="flex items-center justify-start w-1/3">
            <h1 className="text-sm font-semibold ml-14">
              Tipe Product<span className="text-red-500">*</span>
            </h1>
          </div>
          <div className="flex items-center w-full px-4 ">
            <div className="w-1/2">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-[200px] text-[11px] rounded-md px-4 py-2 "
                  >
                    {value
                      ? JENISPRODUCT.find(
                          (jenisproduct) => jenisproduct.value === value
                        )?.label
                      : "Pilih Jenis Product"}
                    {/* <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" /> */}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {JENISPRODUCT.map((jenisproduct) => (
                        <CommandItem
                          key={jenisproduct.value}
                          value={jenisproduct.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {jenisproduct.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === jenisproduct.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <Label htmlFor="airplane-mode">Product Variasi</Label>
              <Switch id="airplane-mode" className="" />
            </div>
          </div>
        </div>
        {/* SKU */}
        <div className="flex my-2 ">
          <div className="flex items-center justify-start w-1/3">
            <h1 className="text-sm font-semibold ml-14">
              SKU<span className="text-red-500">*</span>
            </h1>
          </div>
          <div className="w-full px-4">
            <Input type="email" placeholder="SKU" />
          </div>
        </div>
        {/* deskripsi  */}
        <div className="flex ">
          <div className="flex w-1/3">
            <h1 className="text-sm font-semibold ml-14">
              Deskripsi<span className="text-red-500">*</span>
            </h1>
          </div>
          <div className="w-full px-4">
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
            />
          </div>
        </div>
        {/* informasi pengiriman */}
        <div className="flex my-5">
          <div className="flex items-center justify-center w-1/3">
            <h1 className="text-sm font-semibold ml-9">Informasi Pengiriman</h1>
          </div>
          <div className="grid w-full grid-cols-3 gap-2 px-4 ">
            <div className="">
              <Label htmlFor="berat">Berat Paket</Label>
              <Input type="berat" id="berat" placeholder="Berat Paket" />
            </div>
            <div className="">
              <Label htmlFor="Tinggi">Tinggi Paket</Label>
              <Input type="Tinggi" id="Tinggi" placeholder="Tinggi Paket" />
            </div>
            <div className="">
              <Label htmlFor="Lebar">Lebar Paket</Label>
              <Input type="Lebar" id="Lebar" placeholder="Lebar Paket" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTabsDetail;
