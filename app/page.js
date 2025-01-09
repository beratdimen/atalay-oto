import About from "@/components/about";
import Body from "@/components/body";
import Brands from "@/components/brands";
import Contact from "@/components/contact";
import Sell from "@/components/sell";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Body />
      <Services />
      <Brands />
      <Sell />
      <About />
      <Contact />
    </>
  );
}
