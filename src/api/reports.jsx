const API_URL = "http://localhost:5000/report";

export const getStockReports = async (token, filter) => {
  const response = await fetch(`${API_URL}/summary?filter=${filter}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
