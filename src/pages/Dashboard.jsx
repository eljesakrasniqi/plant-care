import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getAllPlants } from "../services/plants";
import { getUser } from '../services/auth'

function Dashboard() {
  const user = getUser();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then((data) => setPlants(data));
  }, []);

  const needWater = plants.filter((p) => p.status === "needs-water").length;
  const healthy = plants.filter((p) => p.status === "healthy").length;
  const reports = plants.filter((p) => p.status === "warning").length;
  // if (!user) {
  //   return (
  //     <main>
  //       <p>Login first to visit your dashboard</p>
  //     </main>
  //   )
  // }

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


        <div className="mt-10 bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Plants
            </h2>
            <span className="text-sm text-gray-500">
              {plants.length} plants
            </span>
          </div>

          {plants.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No plants added yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-gray-600">Plant</th>
                    <th className="text-left py-3 text-gray-600">Type</th>
                    <th className="text-left py-3 text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {plants.slice(0, 3).map((plant) => (
                    <tr
                      key={plant.id}
                      className="border-b last:border-b-0 hover:bg-gray-50"
                    >
                      <td className="py-4 font-medium">
                        {plant.name}
                      </td>

                      <td className="py-4 text-gray-600">
                        {plant.type}
                      </td>

                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${plant.status === "healthy"
                            ? "bg-green-100 text-green-700"
                            : plant.status === "needs-water"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                            }`}
                        >
                          {plant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;