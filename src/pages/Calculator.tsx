
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Minus, Plus } from "lucide-react";

const Calculator = () => {
  const [distance, setDistance] = useState("1000");
  const [distanceType, setDistanceType] = useState<"kilometers" | "miles">("kilometers");
  const [fuelEfficiency, setFuelEfficiency] = useState("10");
  const [efficiencyType, setEfficiencyType] = useState<"kpl" | "mpg">("kpl");
  const [fuelUnit, setFuelUnit] = useState<"liter" | "gallon">("liter");
  const [fuelPrice, setFuelPrice] = useState(2);

  const calculateCost = () => {
    // Convert all values to a common unit (liters and kilometers) for calculation
    let distanceInKm = distanceType === "miles" ? Number(distance) * 1.60934 : Number(distance);
    let efficiencyInKpl = efficiencyType === "mpg" ? Number(fuelEfficiency) * 0.425144 : Number(fuelEfficiency);
    let pricePerLiter = fuelUnit === "gallon" ? fuelPrice / 3.78541 : fuelPrice;

    const cost = (distanceInKm / efficiencyInKpl) * pricePerLiter;
    return cost.toFixed(2);
  };

  const handleDistanceChange = (value: string) => {
    const numValue = Number(value);
    if (numValue >= 0 && numValue <= 10000) {
      setDistance(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-4">
              Fuel Cost Calculator
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Fuel cost calculator estimates expenses based on vehicle efficiency, distance, and current fuel prices.
            </p>

            {/* Trip Distance Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Distance
              </label>
              <div className="flex gap-2 mb-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    distanceType === "kilometers"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setDistanceType("kilometers")}
                >
                  Kilometers
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    distanceType === "miles"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setDistanceType("miles")}
                >
                  Miles
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-lg bg-gray-100"
                  onClick={() => handleDistanceChange((Number(distance) - 100).toString())}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => handleDistanceChange(e.target.value)}
                  className="flex-1 p-2 border rounded-lg text-center"
                  min="0"
                  max="10000"
                />
                <button
                  className="p-2 rounded-lg bg-gray-100"
                  onClick={() => handleDistanceChange((Number(distance) + 100).toString())}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Fuel Efficiency Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuel Efficiency
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  value={fuelEfficiency}
                  onChange={(e) => setFuelEfficiency(e.target.value)}
                  className="w-24 p-2 border rounded-lg text-center"
                  min="0"
                />
                <select
                  value={efficiencyType}
                  onChange={(e) => setEfficiencyType(e.target.value as "kpl" | "mpg")}
                  className="flex-1 p-2 border rounded-lg bg-white"
                >
                  <option value="kpl">Kilometers per Liter</option>
                  <option value="mpg">Miles per Gallon</option>
                </select>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                *How far a vehicle can travel on a specific amount of fuel
              </p>
            </div>

            {/* Fuel Price Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gas / Fuel Price
              </label>
              <div className="flex gap-2 mb-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    fuelUnit === "liter"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setFuelUnit("liter")}
                >
                  Liter
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    fuelUnit === "gallon"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setFuelUnit("gallon")}
                >
                  Gallon
                </button>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                $ {fuelPrice.toFixed(2)} per {fuelUnit}
              </p>
              <Slider
                value={[fuelPrice]}
                onValueChange={(value) => setFuelPrice(value[0])}
                max={5}
                min={0}
                step={0.1}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0 $</span>
                <span>5 $</span>
              </div>
            </div>

            {/* Total Cost Display */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-gray-700 mb-2">Total Fuel Cost</h3>
              <div className="text-4xl font-bold">
                <span className="text-blue-600">$</span> {calculateCost()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
