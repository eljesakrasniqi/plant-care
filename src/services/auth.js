export const baseUrl = "http://localhost:3002";

export function registerUser(newUser) {
    return fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    }).then((Response) => Response.json())
}

export function loginUser(email, password) {
    return fetch(`${baseUrl}/users?email=${email}`)
        .then((response) => response.json())
        .then((users) => {
            const user = users[0];
            if (!user) {
                throw new Error("Email does not exist");
            }
            if (user.password !== password) {
                throw new Error("Password is incorrect");
            }
            localStorage.setItem("userId", user.id);
            return user;
        });
}

export function logOut() {
    localStorage.removeItem("userId")
}

export function createPlant(plant) {
    return fetch(`${baseUrl}/plants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
    }).then((response) => {
        return response.json()
    })
}