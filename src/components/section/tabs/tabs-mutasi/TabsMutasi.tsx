import CardBase from "@/components/card/CardBase";
import InputText from "@/components/form/InputText";
import PuzzleIcon from "@/components/icons/PuzzleIcon";
import {
  ChevronRightIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const TabsMutasi = () => {
  return (
    <div className="w-full">
      <div className="flex items-center mx-5">
        <CardBase>
          <div className="my-3 overflow-x-auto rounded-md ">
            <div className="flex items-center">
              <ChevronRightIcon className="w-5 h-5" />
              <h1 className="text-gravel text-[18px]">Mutasi Saldo</h1>
            </div>
            <div className="flex my-2">
              <div className="flex items-center gap-x-1 ">
                <InputText
                  id="search"
                  className=""
                  inputClassName="py-1"
                  wrapperClassName="py-1"
                  placeholder="Search"
                  rightIcon={PuzzleIcon}
                />
              </div>
            </div>
            {/* Table */}
            <div className="flex items-center gap-x-10">
              <table className="w-full text-sm text-center uppercase text-gravel">
                <thead className="text-xs bg-[#F5F5F5] border-[#F5F5F5] ">
                  <tr>
                    <th className="px-6 py-3">REF ID</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Method</th>
                    <th className="px-6 py-3">Ammount</th>
                    <th className="px-6 py-3">Fee</th>
                    <th className="px-6 py-3">Amount Received</th>
                    <th className="px-6 py-3">Payment Status</th>
                    <th className="px-6 py-3">Settlement Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-xs bg-white border-b text-grave">
                    <td className="px-6 py-4">2567 </td>
                    <td className="px-6 py-4">PAYMENT</td>
                    <td className="px-6 py-4">EWALLETID_DANA</td>
                    <td className="px-6 py-4">IDR 700.000</td>
                    <td className="px-6 py-4">3000</td>
                    <td className="px-6 py-4">697.000</td>
                    <td className="px-6 py-4">PAID</td>
                    <td className="px-6 py-4">PENDING</td>
                  </tr>
                  <tr className="text-xs bg-white border-b text-grave">
                    <td className="px-6 py-4">2567 </td>
                    <td className="px-6 py-4">PAYMENT</td>
                    <td className="px-6 py-4">EWALLETID_DANA</td>
                    <td className="px-6 py-4">IDR 700.000</td>
                    <td className="px-6 py-4">3000</td>
                    <td className="px-6 py-4">697.000</td>
                    <td className="px-6 py-4">PAID</td>
                    <td className="px-6 py-4">PENDING</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardBase>
      </div>
    </div>
  );
};

export default TabsMutasi;
