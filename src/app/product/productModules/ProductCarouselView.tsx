"use client";
import RoundCircles from "@/components/RoundCircles";
import {
  CartIconLg,
  CartIconXs,
  ChevronRight,
  EyeIcon,
  WishIcon,
} from "@/icons";
import { RootState } from "@/store";
import { Button, Card, Carousel, Rating } from "@material-tailwind/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProductCarouselView: React.FC = () => {
  const product = useSelector(
    (state: RootState) => state.productsData.singleProduct
  );

  return (
    <>
      {product ? (
        <>
          <div className="flex flex-col py-6 w-full">
            <div className="flex justify-center lg:justify-start gap-4 md:justify-start">
              <span className="text-sm font-bold text-meshBlack">Home</span>
              <span className="flex flex-col justify-center">
                <ChevronRight fill="#BDBDBD" />
              </span>
              <span className="text-sm text-secondaryGrey font-bold">Shop</span>
            </div>
          </div>

          <div className="w-full flex lg:flex-row md:flex-row flex-col mb-10 gap-8 lg:px-0 px-4">
            <Card
              className="lg:w-2/4 w-full lg:h-[450px] h-[277px] shadow-lg flex flex-col"
              placeholder={null}
            >
              <Carousel
                placeholder={null}
                autoplay={true}
                loop
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {product?.images.map((image: string, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    alt="image 1"
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover"
                  />
                ))}
              </Carousel>
            </Card>

            <div className="lg:w-2/4 flex w-full flex-col p-2 gap-8">
              <div className="w-full flex-col lg:h-3/5 md:h-3/5 flex gap-4 border-b-2">
                <p className="text-xl text-meshBlack">{product?.title}</p>
                <span className="flex w-full gap-3">
                  <Rating
                    value={Math.floor(product?.rating)}
                    unratedColor="yellow"
                    ratedColor="yellow"
                    placeholder=""
                    className="flex"
                    readonly
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-secondaryGrey">
                      {Math.floor(product?.rating)} reviews
                    </span>
                  </div>
                </span>
                <span className="text-2xl font-bold text-meshBlack">
                  ${product?.price}
                </span>
                <div className="flex w-full gap-2">
                  <span className="text-sm font-bold text-secondaryGrey">
                    Availability :
                  </span>
                  <span className="text-sm font-bold text-primaryBlue capitalize">
                    {product?.stock > 0 ? "In stock" : "Out of stock"}
                  </span>
                </div>

                <div className="lg:hidden md:hidden flex mt-8 mb-2 w-full">
                  <span className="text-sm text-darkGrey">
                    {product?.description}
                  </span>
                </div>
              </div>

              <div className="flex w-full flex-col gap-10">
                <div className="w-full flex gap-2 lg:my-3 md:my-3">
                  <RoundCircles
                    circles={[
                      { bgColor: "primaryBlue" },
                      { bgColor: "successGreen" },
                      { bgColor: "alertOrange" },
                      { bgColor: "black" },
                    ]}
                  />
                </div>

                <div className="w-full flex gap-2">
                  <Button
                    color="blue"
                    placeholder={null}
                    className="bg-primaryBlue rounded-md px-4 lg:px-5 md:px-5"
                  >
                    <span className="text-xs lg:text-sm md:text-sm font-bold text-white">
                      Select Options
                    </span>
                  </Button>
                  <Card
                    className="w-[40px] h-[40px] p-2 rounded-full flex items-center justify-center"
                    placeholder={null}
                  >
                    <WishIcon fill="#252B42" />
                  </Card>
                  <Card
                    className="w-[40px] h-[40px] p-2 rounded-full flex items-center justify-center"
                    placeholder={null}
                  >
                    <CartIconLg fill="#252B42" />
                  </Card>
                  <Card
                    className="w-[40px] h-[40px] p-2 rounded-full flex items-center justify-center"
                    placeholder={null}
                  >
                    <EyeIcon />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProductCarouselView;