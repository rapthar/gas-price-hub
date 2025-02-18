
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationGrid from "@/components/LocationGrid";

const provinces = [
  { name: "Alberta" }, { name: "British Columbia" }, { name: "Manitoba" },
  { name: "New Brunswick" }, { name: "Newfoundland and Labrador" },
  { name: "Nova Scotia" }, { name: "Ontario" }, { name: "Prince Edward Island" },
  { name: "Quebec" }, { name: "Saskatchewan" },
  { name: "Northwest Territories" }, { name: "Nunavut" }, { name: "Yukon" }
];

const Canada = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-costco-blue py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Costco Gas Prices in Canada
          </h1>
        </div>
        <LocationGrid
          title="SELECT YOUR PROVINCE"
          locations={provinces}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Canada;
