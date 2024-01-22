import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function useCheckWishList(id: number): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(false);
  const wishLists = useSelector(
    (state: RootState) => state.productsData.wishListProducts
  );

  const checkList = () => {
    const productExists = wishLists.find(
      (obj: { id: number }) => obj.id === id
    );

    if (productExists) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  useEffect(() => {
    checkList(); // Call checkList when the component mounts or when id changes
  }, [id, wishLists]); // Include id and cartLists as dependencies

  return [value, checkList];
}
