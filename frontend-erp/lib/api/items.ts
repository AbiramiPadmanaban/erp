const API_URL = process.env.NEXT_PUBLIC_API_URL; // Gets the base URL for the backend API from environment variables-> https://localhost:5000/

// GET method to fetch items data from the backend API
export async function getItems() {
  const res = await fetch(`${API_URL}/items/`); // Fetching items data from the backend API -> -> https://localhost:5000/items

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

// POST method to create a new item in the backend API
export async function createItem(data: any) {
  const res = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Converting the Frontend object data to JSON string before sending
  });

  return res.json();
}
