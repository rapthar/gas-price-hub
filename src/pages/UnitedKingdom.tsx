
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationGrid from "@/components/LocationGrid";

const ukLocations = [
  { name: "Birmingham" }, { name: "Bristol" }, { name: "Cardiff" },
  { name: "Chester" }, { name: "Coventry" }, { name: "Derby" },
  { name: "Edinburgh" }, { name: "Glasgow" }, { name: "Leeds" },
  { name: "Leicester" }, { name: "Liverpool" }, { name: "London" },
  { name: "Manchester" }, { name: "Newcastle" }, { name: "Nottingham" },
  { name: "Oxford" }, { name: "Sheffield" }, { name: "Southampton" }
];

const UnitedKingdom = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-costco-blue py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Costco Fuel Prices in United Kingdom
          </h1>
        </div>
        <LocationGrid
          title="SELECT YOUR CITY"
          locations={ukLocations}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UnitedKingdom;
