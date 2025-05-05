import AdvertiseSection from "@/components/AdvertiseSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040505]">
      <Header />
      <Hero />
      <CategoriesGrid />
      <AdvertiseSection />
      <Footer />
    </main>
  );
}
