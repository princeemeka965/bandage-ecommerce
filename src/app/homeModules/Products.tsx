"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { SET_PRODUCTS } from "@/reducers/productsDataSlice";
import Loader from "@/components/Loader";
import { RootState } from "@/store";
import ProductsList from "./ProductsList";
import { Button } from "@material-tailwind/react";

const Products: React.FC = () => {
  const [itemsPerPage] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(0);

  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  const { data, error, isLoading } = useGetProductsListingQuery<any>({
    skip: `${pageNo * itemsPerPage}`,
    limit: `${itemsPerPage}`,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Check if pageNo state value is 0
     * If yes (first page), we display products fetched from our API
     * If no (pagination activated), we concatenate previous state data with new products
     * fetched from our API
     */
    const productsData =
      pageNo > 0 ? products.concat(data?.products) : data?.products;

    // dispatch our products data to the store
    dispatch(SET_PRODUCTS(productsData));
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
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {products ? (
                <ProductsList products={products} />
              ) : products?.length === data?.total ? null : (
                <div className="w-full my-8 flex justify-center">
                  <Button
                    variant="outlined"
                    placeholder=""
                    className="uppercase text-primaryBlue border rounded-md border-primaryBlue"
                    onClick={() => setPageNo(pageNo + 1)}
                  >
                    Load More Products
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
