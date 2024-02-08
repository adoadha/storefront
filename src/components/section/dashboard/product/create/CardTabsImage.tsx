"use client";
import { CameraIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const CardTabsImage = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  //   const files = acceptedFiles.map((file) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));
  return (
    <div className="flex flex-col">
      <h1 className="text-[20px] ml-5 font-semibold text-[#163A50]">
        Gambar Produk
      </h1>
      <div className="flex flex-col my-5">
        {/* nama produk */}
        <div className="flex ">
          <div className="flex flex-col items-center justify-start w-1/3">
            <h1 className="text-sm font-semibold">
              Upload Gambar<span className="text-red-500">*</span>
            </h1>
            <p className="text-[10px] text-red-500">
              *Ukuran : Maks. 2MB <br />
              *Resolusi : Min. 600x600 <br />: Maks. 1000x1000
              <br />
              *Format : JPG, PNG, JPEG
            </p>
          </div>
          <div className="w-full px-4">
            <div
              {...getRootProps()}
              className="w-full rounded-md border-bg-border border h-[170px] flex flex-col items-center justify-center"
            >
              <CloudArrowUpIcon className="h-10 w-15 text-slate-500" />
              <input {...getInputProps()} />
              <p className="text-sm text-slate-500">
                Drag dan drop gambar produk disini
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[20px] ml-6 font-semibold text-[#163A50]">
        Variasi Produk
      </h1>
      <div className="flex flex-col my-5">
        {/* Tipe Variasi */}
        <div className="flex ">
          <div className="flex items-center justify-center w-1/3">
            <h1 className="text-sm font-semibold">Tipe Variasi</h1>
          </div>
          <div className="flex flex-col w-full px-4">
            <div className="">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Tipe Variasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipe Variasi</SelectLabel>
                    <SelectItem value="ukuran">Ukuran</SelectItem>
                    <SelectItem value="warna">Warna</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className=""></div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex text-[11px] gap-x-3  text-slate-500">
            <div className="pl-2 w-1/1">Gambar</div>
            <div className="w-1/4 pl-2 ">Kode SKU</div>
            <div className="w-1/4 pl-2">Nama Variasi</div>
            <div className="w-1/4 pl-2">Harga Jual</div>
            <div className="w-1/4 pl-2">Harga Beli</div>
          </div>
          <Separator orientation="horizontal" className="my-1" />
          <div className="flex gap-x-3">
            <div className="w-1/1">
              <Button className="bg-white border hover:bg-slate-200 border-bg-border">
                <CameraIcon className="w-5 h-5 text-slate-500" />
              </Button>
            </div>
            <div className="w-1/4">
              <Input type="email" />
            </div>
            <div className="w-1/4">
              <Input type="email" />
            </div>
            <div className="w-1/4">
              <Input type="email" />
            </div>
            <div className="w-1/4">
              <Input type="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTabsImage;
