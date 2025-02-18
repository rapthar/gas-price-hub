
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationGrid from "@/components/LocationGrid";

const usStates = [
  { name: "Alabama" }, { name: "Alaska" }, { name: "Arizona" },
  { name: "Arkansas" }, { name: "California" }, { name: "Colorado" },
  { name: "Connecticut" }, { name: "Delaware" }, { name: "Florida" },
  { name: "Georgia" }, { name: "Hawaii" }, { name: "Idaho" },
  { name: "Illinois" }, { name: "Indiana" }, { name: "Iowa" },
  { name: "Kansas" }, { name: "Kentucky" }, { name: "Louisiana" },
  { name: "Maine" }, { name: "Maryland" }, { name: "Massachusetts" },
  { name: "Michigan" }, { name: "Minnesota" }, { name: "Mississippi" },
  { name: "Missouri" }, { name: "Montana" }, { name: "Nebraska" },
  { name: "Nevada" }, { name: "New Hampshire" }, { name: "New Jersey" },
  { name: "New Mexico" }, { name: "New York" }, { name: "North Carolina" },
  { name: "North Dakota" }, { name: "Ohio" }, { name: "Oklahoma" },
  { name: "Oregon" }, { name: "Pennsylvania" }, { name: "Rhode Island" },
  { name: "South Carolina" }, { name: "South Dakota" }, { name: "Tennessee" },
  { name: "Texas" }, { name: "Utah" }, { name: "Vermont" },
  { name: "Virginia" }, { name: "Washington" }, { name: "West Virginia" },
  { name: "Wisconsin" }, { name: "Wyoming" }
];

const UnitedStates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-costco-blue py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Costco Gas Prices in United States
          </h1>
        </div>
        <LocationGrid
          title="SELECT YOUR STATE"
          locations={usStates}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UnitedStates;
