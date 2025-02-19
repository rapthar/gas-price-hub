
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import LocationGrid from "@/components/LocationGrid";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

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

const canadaProvinces = [
  { name: "Alberta" }, { name: "British Columbia" }, { name: "Manitoba" },
  { name: "New Brunswick" }, { name: "Newfoundland and Labrador" },
  { name: "Nova Scotia" }, { name: "Ontario" }, { name: "Prince Edward Island" },
  { name: "Quebec" }, { name: "Saskatchewan" },
  { name: "Northwest Territories" }, { name: "Nunavut" }, { name: "Yukon" }
];

const ukCities = [
  { name: "Birmingham" }, { name: "Bristol" }, { name: "Chester" },
  { name: "Coventry" }, { name: "Derby" }, { name: "Edinburgh" },
  { name: "Gateshead" }, { name: "Glasgow" }, { name: "Haydock" },
  { name: "Leeds" }, { name: "Leicester" }, { name: "Liverpool" },
  { name: "Manchester" }, { name: "Oldham" }, { name: "Reading" },
  { name: "Sheffield" }, { name: "Southampton" }, { name: "Stevenage" },
  { name: "Thurrock" }, { name: "Watford" }
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
          title="CANADA GAS STATIONS BY PROVINCE"
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
