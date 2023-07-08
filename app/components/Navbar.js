import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsHandbagFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import readExcelData from "./excelData";

function Navbar() {
  const excelData = readExcelData();

  return (
    <header className="sticky top-0 z-20">
      <div className="flex h-16 w-full justify-center md:h-32 lg:h-32">
        <div className="flex w-4/5 place-content-between">
          {/* Search Bar */}
          <div className="hover:animate-heartbeat flex items-center text-lg text-white md:text-3xl lg:text-3xl">
            <AiOutlineSearch />
          </div>

          {/* Danton Logo */}
          <div className="flex items-center pl-10 pr-1  lg:pl-20 lg:pr-5">
            <button type="button">
              <Link href="/">
                <Image
                  type="button"
                  className="transform duration-500 ease-in-out hover:scale-110"
                  width={110}
                  height={74}
                  src="/vectors/logo.svg"
                />
              </Link>
            </button>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center text-lg text-white md:text-3xl lg:text-3xl">
            <button
              type="button"
              className="cursor-default hover:animate-hflip-once"
            >
              <RiAccountCircleFill />
            </button>
            <TbMinusVertical />
            <button
              type="button"
              className="cursor-default hover:animate-hflip-once"
            >
              <BsHandbagFill />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center pt-5 font-primary md:mt-10 md:pt-7 lg:mt-10 lg:pt-7">
        <div className="flex w-full place-content-between items-center text-sm text-white md:w-2/5 md:text-xl lg:w-2/5 lg:text-xl">
          {/* <button className="flex  ">For Him</button>
          <TbMinusVertical />
          <button className="flex  ">XXX</button>
          <TbMinusVertical />
          <button className="flex ">For Her</button> */}

          <button className="flex  ">DAY</button>
          <TbMinusVertical />
          <button className="flex  ">OFFICE</button>
          <TbMinusVertical />
          <button className="flex ">TUXEDO</button>
          <TbMinusVertical />
          <button className="flex ">SPORT</button>
          <TbMinusVertical />
          <button className="flex ">DATE</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
