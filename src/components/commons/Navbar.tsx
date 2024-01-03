"use client";

import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const Headernav = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="fixed top-0 z-10 w-full rounded-none shadow"
    >
      <div className="flex justify-center gap-x-2">
        <Navbar.Brand href="/" className="pl-0 sm:pl-10">
          <Image
            className="mt-1"
            src="/store.png"
            alt="Jubelio Edu"
            width={170}
            height={60}
            layout="fixed"
          />
        </Navbar.Brand>
      </div>
      <div className="flex justify-start flex-1 gap-x-5">
        <Link href="#">
          <h1 className="font-semibold text-[16px] text-[#61677F]">
            Dashboard
          </h1>
        </Link>
        <Link href="#">
          <h1 className="font-semibold text-[16px] text-[#61677F]">Payment</h1>
        </Link>
        <Link href="#">
          <h1 className="font-semibold text-[16px] text-[#61677F]">Product</h1>
        </Link>
      </div>

      <div className="flex"></div>

      {/* <div className='flex items-center gap-6'>
					<Link href='/admin'>
						<span className='block text-sm font-medium text-black md:py-5'>Home</span>
					</Link>
					<Link href='/admin/analytics'>
						<span className='block text-sm font-medium text-black md:py-5'>Analytics</span>
					</Link>
				</div> */}
    </Navbar>
  );
};

export default Headernav;
