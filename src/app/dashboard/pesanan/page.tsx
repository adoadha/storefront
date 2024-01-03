import CardBase from "@/components/card/CardBase";
import NavHead from "@/components/commons/Navbar";
import UpStatisticsIcon from "@/components/icons/UpStatisticsIcon";
import React from "react";

const page = () => {
  return (
    <>
      <NavHead />
      <div className="w-full bg-[#F1F9FF]">
        <div className="grid grid-cols-3 gap-3">
          <CardBase>
            <div className="flex-col">
              <h1 className="text-[14px] text-gravel ">Total Sales </h1>
              <div className="flex items-baseline">
                <h1 className="text-[35px] font-semibold text-gravel">1000</h1>
                <UpStatisticsIcon className="w-3 h-3 ml-2" />
                <span className="text-sm text-[#5A9B1A]">20%</span>
              </div>
            </div>
          </CardBase>
        </div>
      </div>
    </>
  );
};

export default page;
