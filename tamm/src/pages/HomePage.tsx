import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import AboutSVG from "./../assets/about.svg";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <CTA />
      <div
        style={{
          backgroundImage: `url(${AboutSVG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <About />
        <Why />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
