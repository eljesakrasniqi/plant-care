import React from 'react'
import Sidebar from '../components/Sidebar'

function CareGuide() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-10">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              Care Guide
            </h1>
            <p className="text-gray-500 mt-2">
              Learn how to take better care of your plants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Watering
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Learn how much water your plants need.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Sunlight
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Understand the right light for your plants.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Fertilizing
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Feed your plants the right way.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Pruning
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Keep your plants healthy with proper pruning.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Repotting
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                When and how to repot your plants.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4"></div>
              <h2 className="text-lg font-semibold text-gray-900">
                Pest Control
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Identify and treat common pests.
              </p>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}

export default CareGuide