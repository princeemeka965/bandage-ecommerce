"use client";

import { useParams } from "next/navigation";
import { useGetSingleProductListingQuery } from "@/services";
import Header from "@/components/Header";
import ProductCarouselView from "../../modules/productModules/ProductCarouselView";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SET_SINGLE_PRODUCT } from "@/reducers/productsDataSlice";
import Loader from "@/components/Loader";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import ProductDescriptionView from "../../modules/productModules/ProductDescriptionView";
import BrandsView from "../../modules/productModules/BrandsView";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();

  const { data, error, isLoading } = useGetSingleProductListingQuery<any>({
    id: params.slug,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_SINGLE_PRODUCT(data));
  }, [data, dispatch]);

  return (
    <>
      <Header productDetailsPage={true} />
      <div className="w-full flex flex-col mt-16 lg:mt-28">
        {isLoading ? (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
            <Loader size="lg" />
          </div>
        ) : (
          <>
            <div className="lg:px-48 px-2 flex flex-col bg-lightGray gap-3">
              <ProductCarouselView />
            </div>
            <div className="bg-white lg:flex md:flex lg:px-48 flex-col hidden">
              <ProductDescriptionView />
            </div>
            <div className="bg-lightGray lg:flex md:flex flex-col hidden">
              <Products productDetailsPage={true} />
              <BrandsView />
            </div>
            <Footer productDetailsPage={true} />
          </>
        )}
      </div>
    </>
  );
}
