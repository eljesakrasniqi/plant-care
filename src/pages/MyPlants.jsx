import React, { useEffect, useState } from "react";
import { getAllPlants } from "../services/plants";
import Sidebar from "../components/Sidebar";
import PlantRow from "../components/PlantRow";

function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllPlants()
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load plants");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              My Plants
            </h1>
            <p className="text-gray-500 text-sm">
              Manage all your plants in one place.
            </p>
          </div>

          <button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            + Add Plant
          </button>
        </div>
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full md:w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div> */}

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-xl shadow overflow-x-auto w-full">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Plant</th>
                  <th className="text-left">Watering</th>
                  <th className="text-left">Last Watered</th>
                  <th className="text-left">Next Watering</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {plants.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-6 text-center text-gray-500">
                       No plants found
                    </td>
                  </tr>
                ) : (
                  plants.map((plant) => (
                    <PlantRow key={plant.id} plant={plant} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default MyPlants;