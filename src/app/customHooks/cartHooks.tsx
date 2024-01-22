import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export function useCheckCartList(id: number) {
  const [value, setValue] = useState<boolean>(false);
  const cartLists = useSelector(
    (state: RootState) => state.productsData.cartProducts
  );

  const checkList = () => {
    const productExists = cartLists.find(
      (obj: { id: number }) => obj.id === id
    );

    console.log(productExists);

    if (productExists) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return [value, checkList];
}
