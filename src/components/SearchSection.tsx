
import { Search } from "lucide-react";

const SearchSection = () => {
  const popularKeywords = ["Edmonton", "California", "Edison", "Ottawa"];

  return (
    <div className="bg-[#005DAA] py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          FIND COSTCO GAS STATION NEAR YOU
        </h1>
        <div className="bg-white rounded-full shadow-xl overflow-hidden flex items-center p-2 mx-auto">
          <Search className="text-gray-400 ml-4 h-5 w-5" />
          <input
            type="text"
            placeholder="City, State or Zip..."
            className="flex-1 px-4 py-3 focus:outline-none text-gray-600 placeholder-gray-400"
          />
          <button className="bg-[#E31837] text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors">
            SEARCH GAS PRICE
          </button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 items-center">
          <span className="text-gray-400">Popular Keywords</span>
          {popularKeywords.map((keyword) => (
            <button
              key={keyword}
              className="bg-gray-50/95 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#005DAA] opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="absolute w-32 h-32 bg-blue-400/10 rounded-full -top-16 -left-16 blur-xl"></div>
        <div className="absolute w-32 h-32 bg-blue-400/10 rounded-full -bottom-16 -right-16 blur-xl"></div>
      </div>
    </div>
  );
};

export default SearchSection;
