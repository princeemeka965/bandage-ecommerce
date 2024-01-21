import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import BlogPosts from "./homeModules/BlogPosts";
import CallToAction from "./homeModules/CallToAction";
import GalleryView from "./homeModules/GalleryView";
import ServicesView from "./homeModules/ServicesView";
import Testimonials from "./homeModules/Testimonials";

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
