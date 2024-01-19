"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SET_PRODUCTS } from "@/reducers/productsDataSlice";

const Products: React.FC = () => {
  const { data, error, loading } = useGetProductsListingQuery<any>("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data?.products));
  }, [loading]);

  return (
    <>
      <div className="lg:py-20 md:py-20 py-5 lg:px-24 px-4 w-full h-auto flex flex-col">
        <div className="w-full flex justify-center">
          <div className="w-3/5 flex flex-col gap-3">
            <span className="text-xl text-center text-secondaryGrey">
              Featured Products
            </span>
            <span className="text-2xl font-bold text-center text-meshBlack uppercase">
              BESTSELLER PRODUCTS
            </span>
            <span className="text-sm text-secondaryGrey text-center">
              Problems trying to resolve the conflict between
            </span>
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap p-3">
          {loading ? <div className="custom-loader" /> : null}
        </div>
      </div>
    </>
  );
};

export default Products;
