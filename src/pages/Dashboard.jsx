import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getAllPlants } from "../services/plants";

function Dashboard() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then((data) => setPlants(data));
  }, []);

  const needWater = plants.filter((p) => p.status === "needs-water").length;
  const healthy = plants.filter((p) => p.status === "healthy").length;
  const reports = plants.filter((p) => p.status === "warning").length;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Monitor your plants in real time.
            </p>
          </div>

          <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
            + Add Plant
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm">Total Plants</p>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">
              {plants.length}
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm">Need Water</p>
            <h2 className="text-3xl font-bold mt-2">
              {needWater}
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Plants that need attention
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm">Healthy</p>
            <h2 className="text-3xl font-bold mt-2">
              {healthy}
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Everything is fine 
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-gray-500 text-sm">Warnings</p>
            <h2 className="text-3xl font-bold mt-2">
              {reports}
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Issues detected
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;