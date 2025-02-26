const API_URL = "http://localhost:5000/stock";

export const getStock = async (token) => {
  const response = await fetch(`${API_URL}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const addStock = async (token, stockData) => {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(stockData),
  });
  return response.json();
};

export const requestStockSupply = async (token, stockId) => {
  const response = await fetch(`${API_URL}/request/${stockId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
