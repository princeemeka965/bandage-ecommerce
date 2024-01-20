"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SET_PRODUCTS } from "@/reducers/productsDataSlice";
import Loader from "@/components/Loader";
import { RootState } from "@/store";
import ProductsList from "./ProductsList";
import { Button } from "@material-tailwind/react";

const Products: React.FC = () => {
  const [itemsPerPage] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(0);
  const [paginateLoader, setLoader] = useState<boolean>(false);

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

    // set pagination loader to false
    setLoader(false);

    // dispatch our products data to the store
    dispatch(SET_PRODUCTS(productsData));
  }, [data, dispatch]);

  const nextPage = () => {
    setPageNo(pageNo + 1);
    // set pagination loader state to true
    setLoader(true);
  };

  return (
    <>
      <div className="lg:py-20 md:py-20 py-5 lg:px-24 px-4 w-full h-auto flex flex-col">
        <div className="w-full flex justify-center">
          <div className="lg:w-3/5 md:w-3/5 w-4/5 flex flex-col gap-3">
            <span className="text-xl text-center justify-center lg:flex md:flex hidden text-secondaryGrey">
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
            <Loader
              size="
            lg"
            />
          ) : (
            <>
              {products ? <ProductsList products={products} /> : null}
              {products?.length === data?.total ? null : (
                <div className="w-full my-8 flex justify-center">
                  {paginateLoader ? (
                    <Loader size="xs" />
                  ) : (
                    <Button
                      variant="outlined"
                      placeholder=""
                      className="uppercase text-primaryBlue border rounded-md border-primaryBlue"
                      onClick={() => nextPage()}
                    >
                      Load More Products
                    </Button>
                  )}
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
