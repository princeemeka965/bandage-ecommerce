"use client";

import { BarChart, ChevronRight, ClockIcon } from "@/icons";
import { Card } from "@material-tailwind/react";
import Image from "next/image";

interface BlogInterface {
  image: string;
}

const BlogPosts: React.FC = () => {
  const blogItems: BlogInterface[] = [
    {
      image: "/unsplash_hHdHCfAifHU.png",
    },
    {
      image: "/unsplash_tVEqStC2uz8.png",
    },
    {
      image: "/unsplash_dEGu-oCuB1Y.png",
    },
  ];
  return (
    <>
      <div className="lg:py-20 md:py-20 py-5 lg:px-24 px-4 w-full h-auto flex flex-col">
        <div className="w-full flex justify-center">
          <div className="lg:w-3/5 md:w-3/5 w-4/5 flex flex-col gap-3">
            <span className="text-sm text-center font-bold text-primaryBlue">
              Practice Advice
            </span>
            <span className="text-2xl font-bold text-center text-meshBlack uppercase">
              Featured Posts
            </span>
          </div>
        </div>
        <div className="w-full flex lg:flex-row md:flex-row flex-col px-3 my-20 gap-x-2 gap-y-10">
          {blogItems.map((item, index) => (
            <div className="flex lg:w-1/3 md:w-1/3 w-full flex-col" key={index}>
              <div className="w-full h-[300px] relative">
                <Image
                  alt="MusicBG"
                  src={item.image}
                  priority
                  quality={100}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute top-0 px-4 py-4">
                  <Card
                    placeholder=""
                    className="shadow-md px-3 py-1 rounded-sm bg-dangerRed"
                  >
                    <span className="text-white text-sm font-bold">New</span>
                  </Card>
                </div>
              </div>
              <Card className="w-full p-4 flex flex-col gap-3" placeholder="">
                <div className="flex flex-row w-full gap-5">
                  <span className="text-disabledBlue text-xs">Google</span>
                  <span className="text-secondaryGrey text-xs">Trending</span>
                  <span className="text-secondaryGrey text-xs">New</span>
                </div>
                <div className="flex">
                  <span className="text-meshBlack text-xl">
                    Loudest à la Madison #1 (L&apos;integral)
                  </span>
                </div>
                <div className="flex">
                  <span className="text-secondaryGrey text-sm">
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </span>
                </div>
                <div className="w-full flex justify-between py-3">
                  <div className="flex gap-2">
                    <ClockIcon />
                    <span className="text-xs text-secondaryGrey">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <BarChart />
                    <span className="text-xs text-secondaryGrey">
                      10 comments
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-sm text-secondaryGrey font-bold">
                    Learn More
                  </span>
                  <span className="flex flex-col justify-center">
                    <ChevronRight />
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
