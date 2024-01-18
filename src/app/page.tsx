import GalleryView from "./homeModules/GalleryView";
import Header from "./homeModules/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:px-14 px-2 py-2 flex flex-col mt-28">
        <GalleryView />
      </div>
    </>
  );
}
