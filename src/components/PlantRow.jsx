import React from "react";
import { Link } from "react-router-dom";


function PlantRow({ plant }) {
    return (
        <>
            <Link to={`/my-plants/${plant.id}`}
                className='block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'
            />
            <tr className="border-t hover:bg-gray-50">
                <td className="p-4">
                    <Link to={`/my-plants/${plant.id}`}>
                        <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                    </Link>
                </td>
                <td className="font-medium text-gray-800">
                    {plant.name}
                </td>
                <td className="text-gray-600">
                    Every {plant.wateringFrequency || 7} days
                </td>
                <td className="text-gray-600">
                    {plant.watered || plant.lastWatered || "-"}
                </td>
                <td className="text-gray-600">
                    {plant.next || plant.nextWatering || "-"}
                </td>
                <td>
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${plant.status === "healthy"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {plant.status}
                    </span>
                </td>
                <td className="text-gray-600 cursor-pointer">
                    ⋮
                </td>

            </tr>
        </>
    );
}

export default PlantRow;