"use client";

import {
  FacebookIconFooter,
  InstagramIconFooter,
  TwitterIconFooter,
} from "@/icons";
import { Button, Input } from "@material-tailwind/react";

interface ListsProp {
  title: string;
  lists: String[];
}

const Footer: React.FC = () => {
  const childrenLists: String[] = [
    "About Us",
    "Carrier",
    "We are hiring",
    "Blog",
  ];

  const featuresLists: String[] = [
    "Business Marketing",
    "User Analytic",
    "Live Chat",
    "Unlimited Support",
  ];

  const resourcesLists: String[] = [
    "IOS & Android",
    "Watch a Demo",
    "Customers",
    "API",
  ];

  const footerLists: ListsProp[] = [
    {
      title: "Company",
      lists: childrenLists,
    },
    {
      title: "Legal",
      lists: childrenLists,
    },
    {
      title: "Features",
      lists: featuresLists,
    },
    {
      title: "Resources",
      lists: resourcesLists,
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col bg-lightGray">
        <div className="w-full lg:px-48 md:px-48 lg:py-10 md:py-10 px-8 py-10 flex flex-col lg:flex-row md: flex-row gap-4 justify-between">
          <span className="text-2xl font-bold text-meshBlack">Bandage</span>
          <span className="flex flex-col justify-center">
            <span className="flex gap-3">
              <FacebookIconFooter />
              <InstagramIconFooter />
              <TwitterIconFooter style={{ marginTop: 3 }} />
            </span>
          </span>
        </div>
        <div className="w-full lg:px-48 md:px-48 lg:py-10 md:py-10 px-8 py-10 flex flex-col lg:flex-row md: flex-row lg:gap-1 gap-7 justify-between bg-white">
          {footerLists.map((footerList, index) => (
            <div
              className="lg:w-1/4 md:w-1/4 w-full flex flex-col gap-5"
              key={index}
            >
              <div className="w-full flex">
                <span className="text-base font-bold text-meshBlack">
                  {footerList.title}
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                {footerList.lists.map((list, index) => (
                  <span
                    className="text-sm text-secondaryGrey font-bold"
                    key={index}
                  >
                    {list}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="lg:w-1/4 md:w-1/4 w-full flex flex-col gap-5">
            <div className="w-full flex">
              <span className="text-base font-bold text-meshBlack capitalize">
                Get in touch
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="relative flex w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={""}
                  className="py-4"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  crossOrigin=""
                  readOnly
                />
                <Button
                  size="sm"
                  className="!absolute right-0 top-0 py-4 bottom-0 rounded bg-primaryBlue"
                  placeholder={undefined}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:px-48 md:px-48 lg:py-10 md:py-10 px-8 py-10 flex flex-col lg:flex-row md: flex-row gap-4 justify-between">
          <span className="text-sm text-secondaryGrey font-bold">
            Made With Love By Finland All Right Reserved{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
