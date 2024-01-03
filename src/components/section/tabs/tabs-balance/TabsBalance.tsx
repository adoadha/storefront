import Button from "@/components/button/Button";
import CardBase from "@/components/card/CardBase";
import UpStatisticsIcon from "@/components/icons/UpStatisticsIcon";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import React from "react";

const TabsBalance = () => {
  return (
    <div className="w-full ">
      <div className="flex mr-5 gap-x-4">
        <CardBase className="w-[450px] ">
          <div className="flex-col">
            <h1 className="text-[18px] px-1 border-l-4 border-picton-blue text-gravel ">
              Dana Kamu Sekarang
            </h1>
            <div className="my-3 ">
              <h1 className="text-[35px] font-semibold text-gravel">
                250.000.000
              </h1>
            </div>
            <div className="flex justify-end">
              <Button className="px-3 py-1 rounded-md bg-white text-nile-blue text-[13px] border border-[#DEDEDE] hover:bg-white">
                Claim Payments
              </Button>
            </div>
          </div>
        </CardBase>
        <CardBase>
          <div className="flex w-full">
            <div className="flex-col">
              <h1 className="text-[18px] px-1 border-l-4 border-picton-blue text-gravel ">
                Riwayat Penarikan
              </h1>
              <div className="flex items-center w-full my-4 rounded-md">
                <table className="text-sm text-center rounded-md text-gravel">
                  <thead className="text-xs uppercase bg-[#F5F5F5] border-[#F5F5F5] ">
                    <tr>
                      <th className="px-6 py-3">Nominal</th>
                      <th className="px-6 py-3">Rekening tujuan</th>
                      <th className="">Status</th>
                      <th className="">Waktu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b text-gravel">
                      <td className="px-6 py-4">IDR 2.563.815 </td>
                      <td className="px-6 py-4">
                        BCA 2772357789 an Sugema Jaya Abadi
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-medium bg-green-600 text-white">
                          completed
                        </span>
                      </td>
                      <td className="px-6 py-4"> 21/9/2022 13:56:36</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardBase>
      </div>
    </div>
  );
};

export default TabsBalance;
