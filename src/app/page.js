import Admission from "@/components/Admission/Admission";
import Hero from "@/components/Header/Hero";
import Jobs from "@/components/Jobs/Jobs";
import Licensing from "@/components/Licensing/Licensing";

export default function Home() {
  return (
    <main
      style={{
        background:
          "linear-gradient(119deg, #FFF 8.67%, #F2FFFE 47.61%, #A5FFFA 99.21%)",
      }}
    >
      <Hero />
      <Admission />
      <Licensing />
      <Jobs/>
    </main>
  );
}
