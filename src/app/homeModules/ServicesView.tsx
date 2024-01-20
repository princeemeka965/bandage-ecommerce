import { Book, BookMarkIcon, SignalGrowth } from "@/icons";

const ServicesView: React.FC = () => {
  return (
    <>
      <div className="lg:py-20 md:py-20 py-5 lg:px-24 px-4 w-full h-auto flex flex-col">
        <div className="w-full flex justify-center">
          <div className="lg:w-3/5 md:w-3/5 w-4/5 flex flex-col gap-3">
            <span className="text-xl text-center text-secondaryGrey">
              Featured Products
            </span>
            <span className="text-2xl font-bold text-center text-meshBlack uppercase">
              THE BEST SERVICES
            </span>
            <span className="text-sm text-secondaryGrey text-center">
              Problems trying to resolve the conflict between
            </span>
          </div>
        </div>

        <div className="w-full flex lg:flex-row md:flex-row flex-col px-3 my-10 gap-x-5 gap-y-10">
          <div className="flex lg:w-1/3 md:w-1/3 w-full flex-col gap-3 py-8 px-10">
            <div className="flex w-full justify-center">
              <BookMarkIcon />
            </div>
            <div className="flex w-full justify-center">
              <span className="text-2xl font-bold text-meshBlack">
                Easy Wins
              </span>
            </div>
            <div className="flex w-full justify-center">
              <span className="text-sm text-center text-secondaryGrey">
                Get your best looking smile now!
              </span>
            </div>
          </div>

          <div className="flex lg:w-1/3 md:w-1/3 w-full flex-col gap-3 py-8 px-10">
            <div className="flex w-full justify-center">
              <Book />
            </div>
            <div className="flex w-full justify-center">
              <span className="text-2xl font-bold text-meshBlack">
                Concrete
              </span>
            </div>
            <div className="flex w-full justify-center">
              <span className="text-sm text-center text-secondaryGrey">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </span>
            </div>
          </div>

          <div className="flex lg:w-1/3 md:w-1/3 w-full flex-col gap-3 py-8 px-10">
            <div className="flex w-full justify-center">
              <SignalGrowth />
            </div>
            <div className="flex w-full justify-center">
              <span className="text-2xl font-bold text-meshBlack">
                Hack Growth
              </span>
            </div>
            <div className="flex w-full justify-center">
              <span className="text-sm text-center text-secondaryGrey">
                Overcame any hurdle or any other problem.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesView;
