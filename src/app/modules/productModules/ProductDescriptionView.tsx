"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProductDescriptionView: React.FC = () => {
  const product = useSelector(
    (state: RootState) => state.productsData.singleProduct
  );

  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-center w-full border-b-2">
          <div className="w-max p-6 flex">
            <span className="text-sm font-semibold text-secondaryGrey">
              Description
            </span>
          </div>
          <div className="w-max p-6 flex">
            <span className="text-sm font-bold text-secondaryGrey">
              Additional Information
            </span>
          </div>
          <div className="w-max p-6 flex gap-1">
            <span className="text-sm font-bold text-secondaryGrey">
              Reviews
            </span>
            <span className="text-sm font-bold text-armyGreen">(0)</span>
          </div>
        </div>

        <div className="w-full pt-6 pb-12 flex gap-8">
          <div className="flex gap-6 w-1/2">
            <span className="text-sm text-secondaryGrey">
              {product?.description}
            </span>
          </div>
          <div className="flex w-1/2 max-h-[372px]">
            <Image
              src={product?.images[0] || ""}
              alt="productImage"
              width={2000}
              height={2000}
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptionView;
