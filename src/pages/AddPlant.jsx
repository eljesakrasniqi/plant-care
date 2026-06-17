import React, { useState } from "react";
import { addPlant } from "../services/plants";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AddPlant() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [frequency, setFrequency] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      type,
      location,
      frequency,
      sunlight,
      notes,
      watered: "Today",
      next: "Tomorrow",
      status: "healthy",
    };

    addPlant(newPlant)
      .then(() => navigate("/my-plants"))
      .catch(() => setError("Failed to create plant"));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-white px-10 py-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Add New Plant
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Add a new plant to your collection.
        </p>

        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label>
              <span className="block text-sm font-medium mb-2">
                Plant Name
              </span>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Monstera Deliciosa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              <span className="block text-sm font-medium mb-2">
                Plant Type
              </span>
              <select
                className={inputClass}
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select plant type</option>
                <option value="Houseplant">Houseplant</option>
                <option value="Succulent">Succulent</option>
                <option value="Flowering">Flowering</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">
              Location
            </span>
            <select
              className={inputClass}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Select location</option>
              <option value="Living room">Living room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Balcony">Balcony</option>
            </select>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label>
              <span className="block text-sm font-medium mb-2">
                Watering Frequency
              </span>
              <select
                className={inputClass}
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="">Select frequency</option>
                <option value="Everyday">Everyday</option>
                <option value="Every 2 days">Every 2 days</option>
                <option value="Weekly">Weekly</option>
              </select>
            </label>

            <label>
              <span className="block text-sm font-medium mb-2">
                Sunlight Needs
              </span>
              <select
                className={inputClass}
                value={sunlight}
                onChange={(e) => setSunlight(e.target.value)}
                required
              >
                <option value="">Select sunlight</option>
                <option value="Bright, indirect">
                  Bright, indirect
                </option>
                <option value="Full sun">Full sun</option>
                <option value="Partial shade">
                  Partial shade
                </option>
                <option value="Low light">Low light</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-medium mb-2">
              Image URL
            </span>
            <input
              type="url"
              className={inputClass}
              placeholder="https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium mb-2">
              Notes (Optional)
            </span>
            <textarea
              rows="4"
              className={inputClass}
              placeholder="Any additional notes about your plant..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Save Plant
            </button>

            <button
              type="button"
              onClick={() => navigate("/my-plants")}
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddPlant;