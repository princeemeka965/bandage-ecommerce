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
      <div className="lg:px-48 flex gap-6 lg:py-12 justify-between">
        {brands.map((brand: string, index: number) => (
          <div className="flex" key={index}>
            <Image
              src={brand}
              alt="productImage"
              width={103}
              height={34}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandsView;
