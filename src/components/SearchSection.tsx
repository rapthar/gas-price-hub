
import { Search } from "lucide-react";

const SearchSection = () => {
  const popularKeywords = ["North", "Edmonton", "California", "Tellon", "Ottawa"];

  return (
    <div className="bg-costco-blue py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          FIND COSTCO GAS STATION NEAR YOU
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="City, State or Zip..."
              className="w-full px-4 py-3 rounded-lg pr-[120px] shadow-lg focus:outline-none focus:ring-2 focus:ring-costco-red"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-costco-red text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm">
              SEARCH GAS PRICE
            </button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="text-gray-200 text-sm">Popular Keywords:</span>
            {popularKeywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
