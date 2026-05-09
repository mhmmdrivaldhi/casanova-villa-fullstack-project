import Hero from "@/components/home/Hero";
import Main from "@/components/shared/main-section";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Hero />
      <div className="mt-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Room & Our Accommodations</h1>
          <p className="px-6 mb-7">Enjoy sophisticated interiors, calming ambience, and premium facilities designed for a comfortable luxury stay.</p>
        </div>
          <Main />
      </div>
    </div>
  );
}
