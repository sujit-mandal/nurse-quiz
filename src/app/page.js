import Admission from "@/components/Admission/Admission";
import Hero from "@/components/Header/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="h-screen"
      style={{
        background:
          "linear-gradient(119deg, #FFF 8.67%, #F2FFFE 47.61%, #A5FFFA 99.21%)",
      }}
    >
      <Hero />
      <Admission />
    </main>
  );
}
