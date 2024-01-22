import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export function useCheckWishList(id: number) {
  const [value, setValue] = useState<boolean>(false);
  const wishLists = useSelector(
    (state: RootState) => state.productsData.wishListProducts
  );

  const checkList = () => {
    const productExists = wishLists.some(
      (obj: { id: number }) => obj.id === id
    );

    if (productExists) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return [value, checkList];
}
