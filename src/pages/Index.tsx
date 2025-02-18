
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import LocationGrid from "@/components/LocationGrid";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const usStates = [
  { name: "Alabama" }, { name: "Alaska" }, { name: "Arizona" },
  { name: "Arkansas" }, { name: "California" }, { name: "Colorado" },
  // ... Add all states
];

const canadaProvinces = [
  { name: "Alberta" }, { name: "British Columbia" }, { name: "Manitoba" },
  // ... Add all provinces
];

const ukCities = [
  { name: "Birmingham" }, { name: "Bristol" }, { name: "Chester" },
  // ... Add all cities
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchSection />
      <main>
        <LocationGrid
          title="US GAS STATIONS BY STATE"
          locations={usStates}
        />
        <LocationGrid
          title="CANADA GAS STATIONS BY STATE"
          locations={canadaProvinces}
        />
        <LocationGrid
          title="UNITED KINGDOM GAS STATIONS BY TOWN"
          locations={ukCities}
        />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
