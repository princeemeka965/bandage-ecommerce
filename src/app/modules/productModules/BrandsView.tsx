import Image from "next/image";

const BrandsView: React.FC = () => {
  const brands: string[] = [
    "/fa-brands-1.png",
    "/fa-brands-2.png",
    "/fa-brands-3.png",
    "/fa-brands-4.png",
    "/fa-brands-5.png",
    "/fa-brands-6.png",
  ];

  return (
    <>
      <div className="lg:px-48 flex lg:gap-6 md:gap-6 gap-14 lg:pt-2 lg:pb-12 lg:flex-row md:flex-row flex-col py-28 lg:justify-between">
        {brands.map((brand: string, index: number) => (
          <div
            className="flex w-full lg:w-max items-center justify-center"
            key={index}
          >
            <div className="lg:w-max w-[139px]">
              <Image
                src={brand}
                alt="productImage"
                width={103}
                height={34}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandsView;
