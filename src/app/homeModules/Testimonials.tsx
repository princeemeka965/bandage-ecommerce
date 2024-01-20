"use client";

import { Avatar, Rating } from "@material-tailwind/react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const images = [
    "/unsplash_0y8p69vwIYM.png",
    "/unsplash_ah7yIXWrtKs.png",
    "/unsplash_6_dx4H4yi1Y.png",
    "/unsplash_GHztzvLLOdQ.png",
    "/unsplash_UUTOuXqaExk.png",
    "/unsplash_rhn8ff1G_QY.png",
    "/unsplash_jo40QKbxUP0.png",
    "/unsplash_QLGA5Zv3doo.png",
    "/unsplash_1R1ecHV4i0Y.png",
  ];

  return (
    <>
      <div className="lg:py-8 md:py-20 py-5 lg:px-24 w-full h-auto flex flex-col">
        <div className="flex lg:flex-row md:flex-row flex-col lg:p-12 p-5 justify-between gap-20 items-center">
          <div className="flex flex-col gap-7 lg:w-1/2 w-full">
            <span className="text-2xl text-center text-meshBlack font-bold">
              What they say about us
            </span>
            <div className="flex flex-col w-full items-center gap-5">
              <div className="flex justify-center w-full">
                <Avatar src="/user-1.jpg" placeholder="" />
              </div>
              <div className="flex flex-row justify-center w-full">
                <Rating
                  value={4}
                  readonly
                  unratedColor="yellow"
                  ratedColor="yellow"
                  placeholder=""
                  className="flex"
                />
              </div>
              <div className="flex w-full">
                <span className="text-sm text-secondaryGrey font-bold text-center">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </span>
              </div>
              <div className="flex w-full justify-center flex-col gap-1">
                <span className="text-sm text-primaryBlue font-bold text-center">
                  Regina Miles
                </span>
                <span className="text-sm text-meshBlack font-bold text-center">
                  Designer
                </span>
              </div>
            </div>
          </div>

          {/** Imgae Gallery */}
          <div className="flex lg:w-2/4 w-full lg:gap-3 md:gap-3 gap-1 flex-wrap">
            {images.map((image, index) => (
              <div
                className="lg:w-[31%] md:w-[31%] w-[32%] lg:h-[143px] h-[112px] relative"
                key={index}
              >
                <Image
                  alt="gallery"
                  src={image}
                  priority
                  quality={100}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
