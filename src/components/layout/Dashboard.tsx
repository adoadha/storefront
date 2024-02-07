"use client";
import { SidebarMenu } from "@/constant/SidebarMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import ThreeBulletIcon from "../icons/ThreeBulletIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-screen min-h-screen">
      {/* header menu */}
      <div className="fixed flex h-[60px] abosolute bg-white w-full ">
        <div className="flex justify-between w-full px-10">
          <div className="flex items-center gap-x-5">
            <ThreeBulletIcon className="w-5 h-5" />
            <Image src="/doaibu.png" alt="" width="110" height="90" />
          </div>
          <div className="flex justify-end mx-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-x-1">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <ChevronDownIcon className="w-6 h-6" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* sidebar menu */}
      <div className=" top-0 left-0 flex flex-col h-screen bg-white w-[290px] pt-16 px-5">
        <div className="flex flex-col">
          {SidebarMenu.map((value, index) => (
            <>
              <Link
                href={value.path}
                key={index}
                className={cn({
                  "bg-blue-50": pathname.split("/dashboard")[1] == value.active,
                })}
              >
                <div className="flex flex-row items-center justify-start p-3 rounded-lg ">
                  <value.icon className="w-5 h-5 " />
                  <span className="ml-4 text-[15px] text-davy-grey">
                    {value.label}
                  </span>
                </div>
              </Link>
              {pathname.split("/")[1] == "dashboard"
                ? value.subMenu &&
                  value.subMenu.map((subvalue, indexsub) => (
                    <Link href={subvalue.path} key={indexsub} className="">
                      <div className="flex flex-row items-center justify-start p-2 ml-5 rounded-lg ">
                        <subvalue.icon className="w-4 h-4 " />
                        <span className="ml-4 text-[15px] text-davy-grey">
                          {subvalue.label}
                        </span>
                      </div>
                    </Link>
                  ))
                : null}
            </>
          ))}
        </div>
      </div>
      {/*Dashboard Content  */}
      <div className="flex w-full min-h-screen py-16 px-7">{children}</div>
    </div>
  );
};

export default Dashboard;
