
import { Link } from "react-router-dom";

interface LocationGridProps {
  title: string;
  locations: { name: string; active?: boolean }[];
}

const LocationGrid = ({ title, locations }: LocationGridProps) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
        {locations.map((location) => (
          <Link
            key={location.name}
            to={`/location/${location.name.toLowerCase()}`}
            className={`p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center ${
              location.active ? "text-costco-red" : "text-gray-600"
            } hover:text-costco-blue`}
          >
            {location.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationGrid;
