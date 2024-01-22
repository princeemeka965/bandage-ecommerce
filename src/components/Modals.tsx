"use client";
import { CloseIcon } from "@/icons";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Card,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CART_PRODUCTS,
  SET_WISHLIST_PRODUCTS,
} from "@/reducers/productsDataSlice";
import { toast } from "react-toastify";

export default function Modals(props: any): ReactNode {
  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => setOpen(true);

  const router = useRouter();
  const dispatch = useDispatch();

  /**
   * Here we remove product from either Cart or Wish List
   * we use the slug props to determine whether for cart or wish list
   */
  const removeProduct = (id: number) => {
    const newProducts = props.products.filter(
      (product: { id: number }) => product.id !== id
    );
    if (props.slug === "cart") {
      dispatch(SET_CART_PRODUCTS(newProducts));
      toast.success("Product removed from cart", { autoClose: 3000 });
    } else {
      dispatch(SET_WISHLIST_PRODUCTS(newProducts));
      toast.success("Product removed from wishlist", { autoClose: 3000 });
    }
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={null}
        style={{ borderRadius: "0px" }}
      >
        <DialogBody
          placeholder={null}
          className="lg:max-h-[80vh] max-h-screen lg:min-h-[0vh] rounded-none"
          style={{ overflow: "auto" }}
        >
          <Card
            placeholder={null}
            shadow={false}
            className="fixed z-50 lg:w-[57%] w-[93%] -mt-4 px-2 py-4"
          >
            <div className="flex flex-row justify-between">
              <Typography variant="h5" color="blue-gray">
                {props.title} ({props?.products.length})
              </Typography>
              <span
                className="flex lg:hidden md:hidden cursor-pointer"
                onClick={() => router.back()}
              >
                <CloseIcon />
              </span>
            </div>
            <hr className="my-2 flex flex-col gap-6 w-full" />
          </Card>{" "}
          {props.products.length > 0 ? (
            <div className="flex w-full flex-col gap-6 mt-16">
              {props.products.map((product: any, index: string) => (
                <>
                  <div
                    className="w-full flex lg:flex-row flex-col md:flex-row gap-20 px-6"
                    key={index}
                  >
                    <div className="lg:w-1/5 md:w-1/5 w-full h-full flex relative">
                      <Image
                        src={product?.thumbnail || ""}
                        width={400}
                        height={400}
                        className="w-full h-full lg:object-contain object-cover"
                        alt="cart-product"
                      />
                    </div>

                    <div className="w-4/5 flex flex-col gap-2">
                      <p className="text-lg text-meshBlack">{product?.title}</p>
                      <div className="flex w-full gap-2">
                        <span className="text-sm text-secondaryGrey">
                          Brand :
                        </span>
                        <span className="text-sm font-bold text-secondaryGrey capitalize">
                          {product?.brand}
                        </span>
                      </div>
                      <span className="text-base font-bold text-meshBlack">
                        ${product?.price}
                      </span>
                      <div className="flex w-full gap-1">
                        <span className="text-sm font-bold text-secondaryGrey">
                          Availability :
                        </span>
                        <span className="text-sm font-bold ml-1 text-primaryBlue capitalize">
                          {product?.stock}
                        </span>
                        <span className="text-sm">items left</span>
                      </div>
                      <div className="w-full flex justify-end">
                        <Button
                          placeholder={null}
                          type="submit"
                          color="red"
                          className="flex justify-center bg-red-500"
                          onClick={() => removeProduct(product?.id)}
                        >
                          <span className="text-xs">
                            Remove from {props.title}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <hr className="w-full" />
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex w-full flex-col h-full gap-6 justify-center">
              <div className="w-full flex justify-center">
                <span className="text-2xl text-meshBlack">
                  No Item Found in {props.title}
                </span>
              </div>
            </div>
          )}
        </DialogBody>
        <DialogFooter placeholder={null}>
          <div className="flex flex-end w-full justify-end">
            <Button
              placeholder={null}
              type="submit"
              className="flex justify-center border text-black"
              onClick={() => router.back()}
            >
              Close
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
