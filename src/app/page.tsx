"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import BlogPosts from "./modules/homeModules/BlogPosts";
import CallToAction from "./modules/homeModules/CallToAction";
import GalleryView from "./modules/homeModules/GalleryView";
import ServicesView from "./modules/homeModules/ServicesView";
import Testimonials from "./modules/homeModules/Testimonials";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Modals from "@/components/Modals";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const cart = searchParams.get("cart");
  const wishList = searchParams.get("wishlist");

  /**
   * Here we get all Products in the Cart and Wishlist
   */
  const cartProducts = useSelector(
    (state: RootState) => state.productsData.cartProducts
  );

  const wishListProducts = useSelector(
    (state: RootState) => state.productsData.wishListProducts
  );

  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header productDetailsPage={false} />
        <div className="lg:px-14 px-2 py-2 flex flex-col lg:mt-28 md:mt-28 mt-20">
          <GalleryView />
          <Products productDetailsPage={false} />
          <ServicesView />
          <BlogPosts />
          <Testimonials />
        </div>
        <CallToAction />
        <Footer productDetailsPage={false} />

        {cart ? (
          <Modals title="Cart" products={cartProducts} slug="cart" />
        ) : null}
        {wishList ? (
          <Modals
            title="Wish List"
            products={wishListProducts}
            slug="wishlist"
          />
        ) : null}
      </div>
    </>
  );
}
