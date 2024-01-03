import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import SwitchToogle from "@/components/switch/SwitchToogle";
import {
  ChevronRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { DeepPartial, FlowbiteTabTheme, Tabs } from "flowbite-react";
import React from "react";

const TabsTheme: DeepPartial<FlowbiteTabTheme> = {
  tablist: {
    styles: {
      pills: "items-start rounded-lg w-content max-w-max h-[40px] text-gravel",
    },
    tabitem: {
      styles: {
        pills: {
          base: "w-full",
          active: {
            on: "px-10  text-nile-blue border-b-4 border-nile-blue",
            off: "px-10",
          },
        },
      },
    },
  },
  tabpanel: "px-0 py-5",
};

const TabsPayment = () => {
  return (
    <div className="w-[1000px]">
      {/* direct transfer */}
      <div className="flex flex-row">
        <CardBase>
          <div className="flex items-center justify-between gap-x-3">
            <div className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
              <h1 className="text-gravel text-[18px]">Direct Transfer</h1>
            </div>
            <div className="mr-[25px]">
              <Button className="rounded-md h-[30px] text-[14px]">
                <PlusIcon className="w-4 h-4" />
                Tambah Rekening
              </Button>
            </div>
          </div>

          <div className="flex items-start ">
            {/* direct transfer */}
            <div className="w-[280px] my-5 flex-col">
              <div className="flex gap-x-3">
                <SwitchToogle />
                <span className="text-[15px] text-gravel">
                  Direct Bank Transfer
                </span>
              </div>
              <div className="flex my-3 gap-x-3">
                <SwitchToogle />
                <span className="text-[15px] text-gravel">
                  Konfirmasi Pembayaran
                </span>
              </div>
              <div className="flex gap-x-3">
                <SwitchToogle />
                <span className="text-[16px] text-gravel">Nominal Unik</span>
              </div>
            </div>
            <div className="w-[620px] ml-[40px] my-3 overflow-x-auto rounded-md">
              <div className="flex items-center gap-x-10">
                <table className="w-full text-sm text-left text-gravel">
                  <thead className="text-xs bg-[#F5F5F5] border-[#F5F5F5] ">
                    <tr>
                      <th className="px-6 py-3">Bank</th>
                      <th className="px-6 py-3">No Rekening</th>
                      <th className="">Nama Rekening</th>
                      <th className="">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b text-gravel">
                      <td className="px-6 py-4">BCA </td>
                      <td className="px-6 py-4">928329381</td>
                      <td className="px-6 py-4">Sugema</td>
                      <td>
                        <TrashIcon className="w-5 h-5" />
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <td className="px-6 py-4">BNI </td>
                      <td className="px-6 py-4">928329381</td>
                      <td className="px-6 py-4">Sugema</td>
                      <td>
                        <TrashIcon className="w-5 h-5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardBase>
      </div>
      <div className="w-full my-6">
        <CardBase>
          <div className="flex items-center">
            <ChevronRightIcon className="w-5 h-5" />
            <h1 className="text-gravel text-[18px]">Payment Gateway</h1>
          </div>

          <div className="my-5">
            <Tabs.Group aria-label="Pills" style="pills" theme={TabsTheme}>
              <Tabs.Item active={true} title="Channel">
                <div className="grid grid-cols-2 gap-4 my-5">
                  <div className="border border-[#F5F5F5] shadow-md rounded-md">
                    <div className="mx-2 my-2">
                      <h1 className="text-gravel text-[16px]">
                        Virtual Account
                      </h1>
                    </div>
                    <div className="mx-3 my-3 ">
                      <div className="flex gap-x-3 ">
                        <SwitchToogle />
                        <span className="text-[14px] text-gravel">
                          Bank Transfer BCA
                        </span>
                      </div>
                      <div className="flex my-2 gap-x-3">
                        <SwitchToogle />
                        <span className="text-[14px] text-gravel">
                          Bank Transfer BNI
                        </span>
                      </div>
                      <div className="flex gap-x-3">
                        <SwitchToogle />
                        <span className="text-[14px] text-gravel">
                          Bank Transfer BRI
                        </span>
                      </div>
                      <div className="flex my-2 gap-x-3">
                        <SwitchToogle />
                        <span className="text-[14px] text-gravel">
                          Bank Transfer Mandiri
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#F5F5F5]">
                    <div className="border border-[#F5F5F5] shadow-md rounded-md">
                      <div className="mx-2 my-2">
                        <h1 className="text-gravel text-[16px]">E-Wallet</h1>
                      </div>
                      <div className="mx-3 my-3 ">
                        <div className="flex gap-x-3 ">
                          <SwitchToogle />
                          <span className="text-[14px] text-gravel">
                            ShopeePay
                          </span>
                        </div>
                        <div className="flex my-2 gap-x-3">
                          <SwitchToogle />
                          <span className="text-[14px] text-gravel">Dana</span>
                        </div>
                        <div className="flex gap-x-3">
                          <SwitchToogle />
                          <span className="text-[14px] text-gravel">Gopay</span>
                        </div>
                        <div className="flex my-2 gap-x-3">
                          <SwitchToogle />
                          <span className="text-[14px] text-gravel">QRIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Pengaturan Lanjutan">
                <div className="grid grid-cols-2 gap-3 my-3">
                  <div className="border border-[#F5F5F5] shadow-md rounded-md">
                    <div className="mx-3 my-3 ">
                      <div className="flex gap-x-3 ">
                        <SwitchToogle />
                        <span className="text-[14px] text-gravel">
                          Bebankan biaya ke customer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#F5F5F5] shadow-md rounded-md">
                    <h1 className="text-[15px] my-3 mx-3 px-1 border-l-4 border-picton-blue text-gravel ">
                      Limit Waktu Pembayaran
                    </h1>
                    <select
                      id=""
                      className="h-[60px] w-[100px] w-full rounded-xl border border-white shadow-none focus:border-white focus:ring-1 focus:ring-white"
                    >
                      <option className="rounded-xl" value="font-sora">
                        Sora
                      </option>
                      <option value="font-poppins">Poppins</option>
                    </select>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </CardBase>
      </div>
    </div>
  );
};

export default TabsPayment;
