
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Calculator = () => {
  const [distance, setDistance] = useState("");
  const [fuelEfficiency, setFuelEfficiency] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    const cost = (Number(distance) / Number(fuelEfficiency)) * Number(fuelPrice);
    setResult(Number(cost.toFixed(2)));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-costco-blue py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Fuel Cost Calculator
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <form onSubmit={calculateCost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Distance (miles)
                </label>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fuel Efficiency (miles per gallon)
                </label>
                <input
                  type="number"
                  value={fuelEfficiency}
                  onChange={(e) => setFuelEfficiency(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fuel Price ($ per gallon)
                </label>
                <input
                  type="number"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-costco-blue text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
            </form>
            {result !== null && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <p className="text-center text-lg font-medium">
                  Estimated Fuel Cost: ${result}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
