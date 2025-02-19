
import { Search } from "lucide-react";

const SearchSection = () => {
  const popularKeywords = ["Edmonton", "California", "Edison", "Ottawa"];

  return (
    <div className="bg-costco-blue py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          FIND COSTCO GAS STATION NEAR YOU
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-full shadow-xl overflow-hidden flex items-center p-2">
            <Search className="text-gray-400 ml-4 h-5 w-5" />
            <input
              type="text"
              placeholder="City, State or Zip..."
              className="flex-1 px-4 py-3 focus:outline-none text-gray-600 placeholder-gray-400"
            />
            <button className="bg-costco-red text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors ml-2">
              SEARCH GAS PRICE
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 items-center">
            <span className="text-gray-300">Popular Keywords</span>
            {popularKeywords.map((keyword) => (
              <button
                key={keyword}
                className="bg-white/10 text-white px-6 py-2 rounded-full text-sm hover:bg-white/20 transition-colors border border-white/20"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
    </div>
  );
};

export default SearchSection;
