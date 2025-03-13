import About from "@/components/about";
import Body from "@/components/body";
import Brands from "@/components/brands";
import CarDetail from "@/components/car-detail";
import Contact from "@/components/contact";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Body />
      <Services />
      <CarDetail />
      <About />
      <Brands />
      <Contact />
    </>
  );
}
