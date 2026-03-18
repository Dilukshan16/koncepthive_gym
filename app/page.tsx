import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "@/components/Services";
import Facility from "@/components/Facility";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}
