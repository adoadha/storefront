"use client";
import Dashboard from "@/components/layout/Dashboard";
import React from "react";
import type { DeepPartial, FlowbiteTabTheme } from "flowbite-react";
import { Tabs } from "flowbite-react";
import TabsPayment from "@/components/section/tabs/tabs-payment/TabsPayment";
import TabsBalance from "@/components/section/tabs/tabs-balance/TabsBalance";
import TabsMutasi from "@/components/section/tabs/tabs-mutasi/TabsMutasi";

const TabsTheme: DeepPartial<FlowbiteTabTheme> = {
  tablist: {
    styles: {
      pills: " rounded-lg w-content max-w-max h-[40px] text-gravel",
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

const SettingsPayment = () => {
  return (
    <div className="w-full">
      <div className="flex-col my-3">
        <h1 className="text-[30px] text-nile-blue">Pembayaran</h1>
        <p className="text-[14px] text-gravel font-semibold">
          kelola channel pembayaran, mutasi saldo dan penarikan toko doa ibumu
        </p>
      </div>
      <div className="my-5">
        <Tabs.Group aria-label="Pills" style="pills" theme={TabsTheme}>
          <Tabs.Item active={true} title="Channel Pembayaran">
            <TabsPayment />
          </Tabs.Item>
          <Tabs.Item title="Saldo">
            <TabsBalance />
          </Tabs.Item>
          <Tabs.Item title="Mutasi Saldo">
            <TabsMutasi />
          </Tabs.Item>
          <Tabs.Item title="Settings"></Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default SettingsPayment;
