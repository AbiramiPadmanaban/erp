const API_URL = process.env.NEXT_PUBLIC_API_URL;
// console.log(API_URL);
// GET method to fetch customers data from the backend API
export async function getCustomers() {
  const res = await fetch(`${API_URL}/customers`);
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}

//POST method to create a new customer in the backend API
export async function createCustomer(data: any) {
  const res = await fetch(`${API_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Converting the Frontend JS object data to JSON string before sending
  });
  // If backend returns error
  if (!res.ok) {
    const errorData = await res.json();

    console.log(errorData);

    throw new Error(errorData.detail?.[0]?.msg || "Failed to create customer");
  }

  return res.json();
}

export async function updateCustomer(customerId: string, data: any) { 
  const res = await fetch(`${API_URL}/customers/${customerId}`, {
    method: "PUT",
    headers: {    
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Converting the Frontend JS object data to JSON string before sending
  });
    if (!res.ok) {
      throw new Error("Failed to update customer");
    }
  return res.json();
}

export async function deleteCustomer(customerId: string) {
  const res = await fetch(`${API_URL}/customers/${customerId}`, {
    method: "DELETE",
  }); 
  if (!res.ok) {
    throw new Error("Failed to delete customer");
  }
  return res.json();
}