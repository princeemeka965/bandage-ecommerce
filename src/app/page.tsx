import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import BlogPosts from "./modules/homeModules/BlogPosts";
import CallToAction from "./modules/homeModules/CallToAction";
import GalleryView from "./modules/homeModules/GalleryView";
import ServicesView from "./modules/homeModules/ServicesView";
import Testimonials from "./modules/homeModules/Testimonials";

export default function Home() {
  return (
    <>
      <Header productDetailsPage={false} />
      <div className="lg:px-14 px-2 py-2 flex flex-col mt-16 lg:mt-28">
        <GalleryView />
        <Products productDetailsPage={false} />
        <ServicesView />
        <BlogPosts />
        <Testimonials />
      </div>
      <CallToAction />
      <Footer productDetailsPage={false} />
    </>
  );
}
