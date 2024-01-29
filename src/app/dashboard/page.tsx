import Image from "next/image";

import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import DownStatisticsIcon from "@/components/icons/DownStatisticsIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import UpStatisticsIcon from "@/components/icons/UpStatisticsIcon";

export default async function Home() {
  return (
    <div className="w-full ">
      <div className="flex flex-row items-center justify-between my-3">
        <h1 className="text-[30px] text-nile-blue">Dashboard</h1>
        <Button className="bg-white px-7 gap-x-3 text-nile-blue hover:bg-white">
          <FilterIcon className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Analytics Section */}
      <div className="">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <CardBase>
              <div className="flex-col">
                <h1 className="text-[14px] text-gravel ">Total Sales </h1>
                <div className="flex items-baseline">
                  <h1 className="text-[35px] font-semibold text-gravel">
                    1000
                  </h1>
                  <UpStatisticsIcon className="w-3 h-3 ml-2" />
                  <span className="text-sm text-[#5A9B1A]">20%</span>
                </div>
              </div>
            </CardBase>
          </div>
          <div className="">
            <CardBase>
              <div className="flex-col">
                <h1 className="text-[14px] text-gravel ">Total Retur</h1>
                <div className="flex items-baseline">
                  <h1 className="text-[35px] font-semibold text-gravel">10</h1>
                  <DownStatisticsIcon className="w-3 h-3 ml-2" />
                  <span className="text-sm text-[#DF4D4D]">10%</span>
                </div>
              </div>
            </CardBase>
          </div>
          <div className="">
            <CardBase>
              <div className="flex-col">
                <h1 className="text-[14px] text-gravel ">Total Visitors </h1>
                <div className="flex items-baseline">
                  <h1 className="text-[35px] font-semibold text-gravel">200</h1>
                  <UpStatisticsIcon className="w-3 h-3 ml-2" />
                  <span className="text-sm text-[#5A9B1A]">20%</span>
                </div>
              </div>
            </CardBase>
          </div>
          <div className="">
            <CardBase>
              <div className="flex-col">
                <h1 className="text-[14px] text-gravel ">Total Customers </h1>
                <div className="flex items-baseline">
                  <h1 className="text-[35px] font-semibold text-gravel">
                    1200
                  </h1>
                  <UpStatisticsIcon className="w-3 h-3 ml-2" />
                  <span className="text-sm text-[#5A9B1A]">40%</span>
                </div>
              </div>
            </CardBase>
          </div>
        </div>
        <div className="flex w-full my-5 gap-x-3">
          <div className="">
            <div className="w-[570px]">
              <CardBase>
                <div className="flex-col">
                  <div className="flex items-center justify-between w-full">
                    <h1>Order Chart</h1>
                    <div className="flex gap-x-3">
                      <div className="flex gap-x-1">
                        <div className="h-4 w-4 rounded-full bg-[#17A2B8]" />
                        <span className="text-nile-blue text-[12px]">
                          Orders
                        </span>
                      </div>
                      <div className="flex gap-x-1">
                        <div className="h-4 w-4 rounded-full bg-[#CED1D2]" />
                        <span className="text-nile-blue text-[12px]">
                          Net Orders
                        </span>
                      </div>
                    </div>
                    <Button className="px-3 bg-white text-nile-blue text-[13px] border border-[#DEDEDE] hover:bg-white">
                      View Reports
                    </Button>
                  </div>
                  <Image
                    src="/chart.png"
                    alt=""
                    width={500}
                    height={200}
                    className="mx-5 my-2"
                  />
                </div>
              </CardBase>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <CardBase>
                  <div className="flex-col">
                    <div className="">
                      <div className="flex items-center justify-between">
                        <h1 className="text-[14px] text-gravel ">
                          Total Orders
                        </h1>
                        <Button className="px-3 bg-white text-nile-blue text-[13px] border border-[#DEDEDE] hover:bg-white">
                          View Orders
                        </Button>
                      </div>
                      <div className="flex items-baseline">
                        <h1 className="text-[35px] font-semibold text-gravel">
                          250
                        </h1>
                        <UpStatisticsIcon className="w-3 h-3 ml-2" />
                        <span className="text-sm text-[#5A9B1A]">30%</span>
                      </div>
                    </div>
                    <div className="mt-7 ">
                      <h1 className="text-[14px] text-gravel ">
                        Average Order Value
                      </h1>
                      <h1 className="text-[35px] font-semibold text-gravel">
                        Rp. 250.000
                      </h1>
                      <div className="flex">
                        <UpStatisticsIcon className="w-3 h-3 " />
                        <span className="text-sm text-[#5A9B1A]">20%</span>
                      </div>
                    </div>
                  </div>
                </CardBase>
              </div>
              <div className="">
                <CardBase>
                  <div className="flex-col mt-1">
                    <h1 className="text-[14px] text-gravel ">Pending Order</h1>
                    <div className="flex items-baseline">
                      <h1 className="text-[35px] font-semibold text-gravel">
                        10
                      </h1>
                    </div>
                  </div>
                </CardBase>
                <CardBase className="mt-7">
                  <div className="flex-col">
                    <h1 className="text-[14px] text-gravel ">
                      Canceled Order{" "}
                    </h1>
                    <div className="flex items-baseline">
                      <h1 className="text-[35px] font-semibold text-gravel">
                        0
                      </h1>
                    </div>
                  </div>
                </CardBase>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[280px]">
          <CardBase>
            <div className="flex items-center gap-x-3">
              <h1 className="text-nile-blue text-[18px]">Direct Transfer</h1>
            </div>
          </CardBase>
        </div>
      </div>
    </div>
  );
}
