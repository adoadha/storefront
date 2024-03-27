import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { IProduct } from "@/interfaces/product";
import TableVariations from "../section/dashboard/product/product/table-variations";
import TablePrice from "../section/dashboard/product/product/table-price";

interface DetailProductScreenProps {
  data: IProduct;
  isLoading?: boolean;
}

const DetailProductScreen = ({ data, isLoading }: DetailProductScreenProps) => {
  return (
    <>
      <ol
        className="flex items-center p-2 mt-5 bg-white rounded-md w-fit"
        aria-label="Breadcrumb"
      >
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 me-3"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Dashboard
          </a>
          <svg
            className="flex-shrink-0 w-4 h-4 mx-2 overflow-visible text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 me-3"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={7} height={7} x={14} y={3} rx={1} />
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
            </svg>
            Product
            <svg
              className="flex-shrink-0 w-4 h-4 mx-2 overflow-visible text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </li>
        <li
          className="inline-flex items-center text-sm font-semibold text-gray-500 truncate dark:text-gray-200"
          aria-current="page"
        >
          {data?.product_name}
        </li>
      </ol>
      <Card className="my-5 ">
        <div className="flex justify-between">
          <h1 className="mx-5 my-2 text-2xl font-semibold">
            Produk - {data?.product_name}
          </h1>
          <div className="flex items-center mx-2 gap-x-1">
            <Button>Edit</Button>
            <Separator orientation="vertical" className="space-y-1" />
            <XMarkIcon className="w-6 h-6" />
          </div>
        </div>

        <Separator className="px-5" />
        <div className="flex flex-col w-full">
          <div className="flex my-3 ">
            <div className="flex flex-col w-1/3">
              <div className="flex justify-center">
                <Image
                  height="300"
                  width="300"
                  src={data?.thumbnail_images_url}
                  alt=""
                />
              </div>
              <div className="flex gap-3 my-2">
                {data?.gallery_images.map((value) => (
                  <Image
                    key={value.url_product_cloudinary}
                    height="75"
                    width="60"
                    src={value.url_product_cloudinary}
                    alt=""
                    className="border rounded-md border-slate-200"
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 pr-5">
              <h1 className="text-sm text-slate-400">Harga</h1>
              <h1 className="my-1 text-2xl font-semibold"> Rp 350.000</h1>
              <Separator className="w-full" />
              <div className="flex my-5">
                <div className="flex-1 ">
                  <div className="flex flex-col w-full ">
                    <div className="flex gap-x-11 ">
                      <div className="flex flex-col">
                        <h1 className="text-sm text-slate-400">Kategori</h1>
                        <h1 className="text-sm">{data?.category_name}</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-sm text-slate-400">Tipe Produk</h1>
                        <h1 className="text-sm">{data?.category_name}</h1>
                      </div>
                    </div>
                    <div className="flex flex-col my-3">
                      <h1 className="text-sm text-slate-400">Description</h1>
                      <h1 className="text-sm">{data?.description}</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end flex-1 ">
                  <div className="flex flex-col items-center pr-9">
                    <h1 className="text-sm text-slate-400">Barcode Produk</h1>
                    <Image
                      height="120"
                      width="120"
                      src={data?.qr_images_url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-2">
          <Tabs defaultValue="variasi" className="w-full">
            <TabsList className="flex justify-start px-4 bg-white gap-x-5">
              <TabsTrigger value="variasi" className="border-b ">
                Variasi
              </TabsTrigger>
              <TabsTrigger value="harga">Harga Produk</TabsTrigger>
            </TabsList>
            <div className="w-full">
              <TabsContent value="variasi" className="w-full px-5 py-5 ">
                <TableVariations
                  data={data?.variation_values}
                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="harga" className="w-full px-5 py-5">
                <TablePrice
                  data={data?.variation_values}
                  isLoading={isLoading}
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </Card>
    </>
  );
};

export default DetailProductScreen;
