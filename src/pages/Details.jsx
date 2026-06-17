import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlantById } from "../services/plants";
import Sidebar from "../components/Sidebar";

function Details() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        type: "",
        location: "",
        wateringFrequency: "",
        notes: ""
    });
    useEffect(() => {
        getPlantById(id)
            .then((data) => {
                setPlant(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Failed to load plant");
                setLoading(false);
            });
    }, [id]);
    useEffect(() => {
        getPlantById(id)
            .then((data) => {
                setPlant(data);
                setFormData({
                    name: data.name || "",
                    type: data.type || "",
                    location: data.location || "",
                    wateringFrequency: data.wateringFrequency || "",
                    notes: data.notes || ""
                });
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Failed to load plant");
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return (
            <main className="p-6">
                <p className="text-gray-600">Loading...</p>
            </main>
        );
    }
    if (error || !plant) {
        return (
            <main className="p-6">
                <p className="text-red-600">{error || "Plant not found"}</p>
                <Link to="/my-plants" className="text-blue-600 mt-3 inline-block">
                    ← Back to plants
                </Link>
            </main>
        );
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const updatePlant = (id, data) => {
        return fetch(`http://localhost:3002/plants/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    };
    const handleSave = () => {
        updatePlant(id, { ...plant, ...formData })
            .then((updated) => {
                setPlant(updated);
                setIsEditing(false);
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 p-10">
                <Link
                    to="/my-plants"
                    className="inline-block mb-8 text-gray-600 hover:text-green-600"
                >
                    Back to My Plants
                </Link>
                <div className="flex gap-12 items-start">
                    <div className="w-[420px] flex-shrink-0">
                        <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-full h-[420px] object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <h1 className="text-4xl font-bold text-gray-900">
                                    {plant.name}
                                </h1>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${plant.status === "healthy"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {plant.status}
                                </span>
                            </div>

                            <button
                                onClick={() => setIsEditing(true)}
                                className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50"
                            >
                                Edit
                            </button>
                        </div>
                        {isEditing ? (
                            <div className="flex flex-col gap-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border p-2 rounded"
                                />

                                <input
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="border p-2 rounded"
                                />

                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="border p-2 rounded"
                                />


                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="border p-2 rounded"
                                />

                                <div className="flex gap-3">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-600 text-white px-4 py-2 rounded"
                                    >
                                        Save
                                    </button>

                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="border px-4 py-2 rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Plant Type</span>
                                    <span className="font-medium">
                                        {plant.type || "Houseplant"}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-medium">
                                        {plant.location || "Living Room"}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Watering Frequency
                                    </span>
                                    <span className="font-medium">
                                        Every {plant.wateringFrequency || 7} days
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Last Watered</span>
                                    <span className="font-medium">
                                        {plant.watered || "-"}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Next Watering</span>
                                    <span className="font-medium">
                                        {plant.next || "-"}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Notes */}
                <div className="mt-12 border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                        Care Notes
                    </h3>

                    <p className="text-gray-600">
                        {plant.notes ||
                            "Loves humidity and indirect light. Wipe leaves regularly and rotate the pot for even growth."}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Details;