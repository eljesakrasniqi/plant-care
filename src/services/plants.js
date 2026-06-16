export const baseUrl = "http://localhost:3002";

export function getAllPlants() {
    return fetch(`${baseUrl}/plants`).then((response) => {
        return response.json();
    })
}
export function getPlantById(id) {
    return fetch(`${baseUrl}/plants/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch plant with id ${id}: ${response.statusText}`)
            }
            return response.json();
        })
}
export function addPlant(plant) {
    return fetch(`${baseUrl}/plants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
    }).then((response) => {
        return response.json()
    })
}
export function deletePlant(id) {
  return fetch(`${baseUrl}/plants/${id}`, {
    method: "DELETE",
  });
}