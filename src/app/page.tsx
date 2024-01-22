"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import BlogPosts from "./modules/homeModules/BlogPosts";
import CallToAction from "./modules/homeModules/CallToAction";
import GalleryView from "./modules/homeModules/GalleryView";
import ServicesView from "./modules/homeModules/ServicesView";
import Testimonials from "./modules/homeModules/Testimonials";
import CartList from "@/components/CartLists";
import WishList from "@/components/WishLists";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const cart = searchParams?.cart;
  const wishList = searchParams?.wishlist;

  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header productDetailsPage={false} />
        <div className="lg:px-14 px-2 py-2 flex flex-col mt-28">
          <GalleryView />
          <Products productDetailsPage={false} />
          <ServicesView />
          <BlogPosts />
          <Testimonials />
        </div>
        <CallToAction />
        <Footer productDetailsPage={false} />

        {cart ? <CartList /> : null}
        {wishList ? <WishList /> : null}
      </div>
    </>
  );
}
