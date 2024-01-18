"use client";

import Image from "next/image";

const GalleryView: React.FC = () => {
  return (
    <>
      {/*** For LARGE DEVICES */}
      <div className="lg:py-20 md:py-20 py-5 lg:px-24 px-4 w-full h-auto flex">
        <div className="flex lg:flex-row flex-col w-full lg:h-[626px] gap-5 lg:gap-2 md:gap-2">
          <div className="lg:w-1/3 w-full flex">
            <div className="w-full lg:h-full md:h-full h-[200px] relative">
              <Image
                src="/card-cover-5.jpg"
                priority
                width={451}
                height={400}
                alt="cover-one"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="absolute w-full p-6 flex flex-col top-0 gap-3">
                <span className="text-sm font-bold text-successGreen">
                  5 items
                </span>
                <span className="text-3xl font-bold text-meshBlack uppercase">
                  Furniture
                </span>
                <span className="text-sm font-bold text-meshBlack">
                  Read More
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col gap-5 lg:gap-2 md:gap-2">
            <div className="w-full lg:h-[310px] md:h-full h-[200px] relative">
              <Image
                src="/card-cover-6.jpg"
                priority
                width={451}
                height={400}
                alt="cover-one"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="absolute w-full p-6 flex flex-col top-0 gap-3">
                <span className="text-sm font-bold text-successGreen">
                  5 items
                </span>
                <span className="text-3xl font-bold text-meshBlack uppercase">
                  Furniture
                </span>
                <span className="text-sm font-bold text-meshBlack">
                  Read More
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 md:gap-2">
              <div className="w-full lg:h-[310px] md:h-full h-[200px] relative">
                <Image
                  src="/card-cover-7.jpg"
                  priority
                  width={451}
                  height={400}
                  alt="cover-one"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="absolute w-full p-6 flex flex-col top-0 gap-3">
                  <span className="text-sm font-bold text-successGreen">
                    5 items
                  </span>
                  <span className="text-3xl font-bold text-meshBlack uppercase">
                    Furniture
                  </span>
                  <span className="text-sm font-bold text-meshBlack">
                    Read More
                  </span>
                </div>
              </div>

              <div className="w-full lg:h-[310px] md:h-full h-[200px] relative">
                <Image
                  src="/card-cover-8.jpg"
                  priority
                  width={451}
                  height={400}
                  alt="cover-one"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="absolute w-full p-6 flex flex-col top-0 gap-3">
                  <span className="text-sm font-bold text-successGreen">
                    5 items
                  </span>
                  <span className="text-3xl font-bold text-meshBlack uppercase">
                    Furniture
                  </span>
                  <span className="text-sm font-bold text-meshBlack">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** For  */}
    </>
  );
};

export default GalleryView;
