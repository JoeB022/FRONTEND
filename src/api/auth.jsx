const API_URL = "http://localhost:5000/auth";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerUser = async (email, password, role) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role }),
  });
  return response.json();
};

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};
