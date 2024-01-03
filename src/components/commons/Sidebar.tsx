"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  HomeIcon,
  LinkIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import PuzzleIcon from "../icons/PuzzleIcon";
import DiscountBadge from "../icons/DiscountBadge";
import StoreIcon from "../icons/StoreIcon";
import { cn } from "@/lib/utils";

type SidebarProps = React.ComponentPropsWithoutRef<"div">;

const Sidebar: React.FC<SidebarProps> = ({
  className,
  ...rest
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className={cn("", className)} {...rest}>
      <div className=" top-0 left-0 flex h-screen w-[280px] flex-col bg-white text-black">
        <div className="flex flex-col mt-10">
          <div className="items-start">
            <ul className="p-8 m-0 space-y-2">
              <Link href="#" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <PuzzleIcon className="w-5 h-5 text-white" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Dashboard
                  </span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <ShoppingCartIcon className="w-5 h-5 " />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Pesanan
                  </span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <DiscountBadge className="w-5 h-5 text-[#45464E]" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Diskon
                  </span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Pesanan
                  </span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <ChartBarIcon className="w-5 h-5 text-[#45464E]" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Analytics
                  </span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <StoreIcon className="w-5 h-5 text-[#45464E]" />
                  <span className="ml-4 text-[15px] text-davy-grey">Toko</span>
                </div>
              </Link>
              <Link href="/dashboard/settings" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg ">
                  <Cog8ToothIcon className="w-5 h-5 text-[#45464E]" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    Pengaturan
                  </span>
                </div>
              </Link>
              <Link href="/logout" passHref>
                <div className="flex flex-row items-center justify-start p-4 rounded-lg">
                  <ArrowRightOnRectangleIcon className="w-6 h-6 text-[#45464E]" />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    logout
                  </span>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
