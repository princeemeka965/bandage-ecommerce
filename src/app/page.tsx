import BlogPosts from "./homeModules/BlogPosts";
import GalleryView from "./homeModules/GalleryView";
import Header from "./homeModules/Header";
import Products from "./homeModules/Products";
import ServicesView from "./homeModules/ServicesView";
import Testimonials from "./homeModules/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:px-14 px-2 py-2 flex flex-col mt-28">
        <GalleryView />
        <Products />
        <ServicesView />
        <BlogPosts />
        <Testimonials />
      </div>
    </>
  );
}
