"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";

const CallToAction: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="absolute w-full h-[640px]">
          <Image
            alt="bg-call-to-action"
            src="/unsplash_XEmaJaM-4nE.png"
            priority
            quality={100}
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full lg:py-40 md:py-40 py-28 lg:px-28 md:px-28 px-5 h-[640px] flex justify-center z-10">
          <div className="w-full flex flex-col gap-[30px]">
            <span className="text-sm text-primaryBlue text-center font-bold">
              Designing Better Experience
            </span>
            <span className="text-4xl font-bold text-center tracking-wide text-meshBlack">
              Problems trying to resolve the conflict between
            </span>
            <span className="text-sm text-secondaryGrey text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </span>
            <span className="text-2xl text-armyGreen font-bold text-center">
              $16.48
            </span>
            <div className="items-center justify-center flex">
              <Button color="blue" placeholder="" className="bg-primaryBlue">
                <span className="text-sm text-white uppercase">
                  ADD YOUR CALL TO ACTION
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
