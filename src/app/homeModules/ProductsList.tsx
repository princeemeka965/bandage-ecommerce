import Image from "next/image";

interface ProductsObject {
  id: number;
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
}

interface ProductsListProp {
  products: ProductsObject[];
}

const ProductsList: React.FC<ProductsListProp> = ({ products }) => {
  // function to get discount price for each product
  const calculateDiscountPrice = (
    price: number,
    discountPercentage: number
  ): number => {
    const discountPrice: number = (price * discountPercentage) / 100;
    return Math.round(discountPrice);
  };

  return (
    <>
      {products?.map((product, index) => (
        <div className="lg:w-1/6 md:w-1/5 w-full flex flex-col" key={index}>
          <div className="w-full h-[238px] relative">
            <Image
              src={product?.thumbnail || ""}
              width={183}
              height={238}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              alt="product_logo"
            />
          </div>
          <div
            className="w-full py-5 flex flex-col gap-4"
            title={product?.title}
          >
            <span className="text-base font-bold text-center whitespace-nowrap overflow-ellipsis overflow-hidden text-meshBlack">
              {product?.title}
            </span>
            <span className="text-sm font-bold flex justify-center text-center text-secondaryGrey">
              {product?.brand}
            </span>
            <span className="text-base font-bold flex justify-center gap-2">
              <span className="flex line-through text-primaryGrey">
                ${product?.price}
              </span>
              <span className="flex text-armyGreen">
                $
                {calculateDiscountPrice(
                  product?.price,
                  product?.discountPercentage
                )}
              </span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsList;
