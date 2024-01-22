import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useCheckCartList(id: number): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(false);
  const cartLists = useSelector(
    (state: RootState) => state.productsData.cartProducts
  );

  const checkList = () => {
    const productExists = cartLists.find(
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
  }, [id, cartLists]); // Include id and cartLists as dependencies

  return [value, checkList];
}
