"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { SET_PRODUCTS } from "@/reducers/productsDataSlice";
import Loader from "@/components/Loader";
import { RootState } from "@/store";
import ProductsList from "./ProductsList";

const Products: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  const { data, error, isLoading } = useGetProductsListingQuery<any>("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data?.products));
  }, [data, dispatch]);

  console.log(products);

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

        <div className="w-full flex flex-row flex-wrap px-3 py-20 items-center gap-x-1 gap-y-10 justify-between">
          {isLoading ? <Loader /> : <ProductsList products={products} />}
        </div>
      </div>
    </>
  );
};

export default Products;
