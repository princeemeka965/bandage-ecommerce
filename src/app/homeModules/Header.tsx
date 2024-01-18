"use client";

import {
  Avatar,
  CaretBlack,
  CartIconLg,
  CartIconXs,
  CollapseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SearchIconLg,
  SearchIconXs,
  TwitterIcon,
  WishIcon,
  YouTubeIcon,
} from "@/icons";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import { useState } from "react";

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const navPageLists = (
    <>
      <span className="text-sm text-secondaryGrey font-bold">Home</span>
      <span className="flex gap-2">
        <span className="text-sm text-meshBlack">Shop</span>
        <span className="flex flex-col justify-center">
          <CaretBlack />
        </span>
      </span>
      <span className="text-sm text-secondaryGrey font-bold">About</span>
      <span className="text-sm text-secondaryGrey font-bold">Blog</span>
      <span className="text-sm text-secondaryGrey font-bold">Contact</span>
      <span className="text-sm text-secondaryGrey font-bold">Pages</span>
    </>
  );

  const navRightList = (
    <ul className="flex gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 md:gap-8">
      <div className="lg:flex md:flex gap-2 hidden">
        <span className="flex flex-col justify-center">
          <Avatar />
        </span>
        <span className="text-sm font-bold text-primaryBlue">
          Login / Register
        </span>
      </div>
      <div className="flex">
        <SearchIconXs className="lg:hidden md:hidden" />
        <SearchIconLg className="lg:block md:block hidden" />
      </div>
      <div className="flex gap-1">
        <CartIconXs className="lg:hidden md:hidden" />
        <CartIconLg className="lg:block md:block hidden" />
        <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
          1
        </span>
      </div>
      <div className="lg:flex md:flex hidden gap-1">
        <WishIcon />
        <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
          1
        </span>
      </div>
      <div className="flex lg:hidden md:hidden">
        <IconButton
          placeholder={""}
          variant="text"
          className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <CollapseIcon />
          )}
        </IconButton>
      </div>
    </ul>
  );

  const collapsedNavList = (
    <ul className="mt-10 flex flex-col lg:hidden md:hidden gap-5">
      <div className="flex w-full justify-center p-2">
        <span className="text-2xl text-secondaryGrey">Home</span>
      </div>
      <div className="flex w-full justify-center p-2">
        <span className="text-2xl text-secondaryGrey">Product</span>
      </div>
      <div className="flex w-full justify-center p-2">
        <span className="text-2xl text-secondaryGrey">Pricing</span>
      </div>
      <div className="flex w-full justify-center p-2">
        <span className="text-2xl text-secondaryGrey">Contact</span>
      </div>
    </ul>
  );

  return (
    <>
      <div className="h-max w-full fixed" style={{ zIndex: 9 }}>
        <div className="bg-armyGreen lg:px-8 px-2 py-4 lg:flex md:flex hidden gap-10 justify-between">
          <div className="flex gap-6">
            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <PhoneIcon />
              </div>
              <span className="text-sm text-white font-bold">
                (225) 555-0118
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <MailIcon />
              </div>
              <span className="text-sm text-white font-bold">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          <div className="flex">
            <span className="text-sm font-bold text-white">
              Follow Us and get a chance to win 80% off
            </span>
          </div>

          <div className="flex gap-3">
            <span className="text-sm font-bold text-white">Follow Us :</span>
            <div className="flex flex-col justify-center">
              <InstagramIcon />
            </div>
            <div className="flex flex-col justify-center">
              <YouTubeIcon />
            </div>
            <div className="flex flex-col justify-center">
              <FacebookIcon />
            </div>
            <div className="flex flex-col justify-center">
              <TwitterIcon />
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <Navbar
            className="sticky top-0 z-10 h-max max-w-full rounded-none border-none lg:px-8 md:px-8 px-6 py-3"
            placeholder={undefined}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-28">
                <span className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-black">
                  Bandage
                </span>
                <div className="lg:flex md:flex hidden gap-6 items-center">
                  {navPageLists}
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex">{navRightList}</div>
              </div>
            </div>
            <Collapse
              open={openNav}
              className={openNav ? "" : "overflow-hidden"}
            >
              {collapsedNavList}
            </Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
