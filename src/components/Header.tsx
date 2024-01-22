"use client";

import {
  Avatar,
  AvatarXs,
  CaretBlack,
  CartIconLg,
  CartIconMd,
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
  WishIconXs,
  YouTubeIcon,
} from "@/icons";
import { RootState } from "@/store/store";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

interface HeaderProps {
  productDetailsPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ productDetailsPage }) => {
  // productDetailsPage prop is true if user is viewing from product details page
  // If productDetailsPage props is true, format styles and contents.

  const [openNav, setOpenNav] = useState<boolean>(false);

  const cartProducts = useSelector(
    (state: RootState) => state.productsData.cartProducts
  );

  const wishProducts = useSelector(
    (state: RootState) => state.productsData.wishListProducts
  );

  /**
   * Here we use the usePathname hook to get current URL
   * This would be helpful when displaying our MODALS
   */

  const pathname = usePathname();

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
      <div
        className={`lg:flex md:flex ${productDetailsPage ? "hidden" : "flex"}`}
      >
        <SearchIconXs className="lg:hidden md:hidden" />
        <SearchIconLg className="lg:block md:block hidden" />
      </div>
      <div
        className={`lg:flex md:flex gap-1 cursor-pointer ${
          productDetailsPage ? "hidden" : "flex"
        }`}
      >
        <Link href={`${pathname}/?cart=true`} className="flex gap-1">
          <CartIconXs className="lg:hidden md:hidden" />
          <CartIconLg className="lg:block md:block hidden" />
          <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
            {cartProducts.length}
          </span>
        </Link>
      </div>
      <div className="lg:flex md:flex hidden gap-1">
        <Link href={`${pathname}/?wishlist=true`} className="flex gap-1">
          <WishIcon />
          <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
            {wishProducts.length}
          </span>
        </Link>
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
              style={{ marginTop: -11 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <CollapseIcon style={{ marginTop: -6, marginLeft: -10 }} />
          )}
        </IconButton>
      </div>
    </ul>
  );

  // Collapsed navigation links, ONLY on mobile devices
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
      {productDetailsPage ? (
        <>
          <div className="flex w-full justify-center gap-2 p-2">
            <span className="flex flex-col justify-center">
              <AvatarXs />
            </span>
            <span className="text-2xl text-primaryBlue font-normal">
              Login / Register
            </span>
          </div>
          <div className="flex w-full justify-center gap-2 p-2">
            <SearchIconXs fill="#23A6F0" />
          </div>
          <div className="flex w-full justify-center gap-2 p-2">
            <CartIconMd fill="#23A6F0" />
            <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
              {cartProducts.length}
            </span>
          </div>
          <div className="flex w-full justify-center gap-2 p-2">
            <WishIconXs />
            <span className="flex flex-col text-xs justify-center font-semibold text-primaryBlue">
              {wishProducts.length}
            </span>
          </div>
        </>
      ) : null}
    </ul>
  );

  return (
    <>
      <div className="h-max w-full fixed bg-white" style={{ zIndex: 9999 }}>
        <div
          className={`bg-armyGreen ${
            productDetailsPage ? "lg:px-48 md:px-48" : "lg:px-8 md:px-8"
          } px-2 py-4 lg:flex md:flex hidden gap-10 justify-between`}
        >
          <div className="flex gap-6">
            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <PhoneIcon />
              </div>
              <span
                className={`text-sm text-white ${
                  productDetailsPage ? "font-normal" : "font-bold"
                }`}
              >
                (225) 555-0118
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col justify-center">
                <MailIcon />
              </div>
              <span
                className={`text-sm text-white ${
                  productDetailsPage ? "font-normal" : "font-bold"
                }`}
              >
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
            className={`sticky top-0 z-10 h-max max-w-full rounded-none border-none ${
              productDetailsPage ? "lg:px-48 md:px-48" : "lg:px-8 md:px-8"
            } px-6 py-3`}
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
