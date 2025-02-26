import { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Reports() {
  const [reportData, setReportData] = useState([]);
  const [filter, setFilter] = useState("monthly");

  // Fetch Reports from Backend
  useEffect(() => {
    const fetchReportData = async () => {
      const response = await fetch(`http://localhost:5000/report/summary?filter=${filter}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      if (response.ok) {
        setReportData(data);
      } else {
        alert("Failed to fetch report data");
      }
    };

    fetchReportData();
  }, [filter]);

  return (
    <div className="container mt-5">
      <h2>Reports & Data Visualization</h2>

      {/* Filter Dropdown */}
      <div className="mb-3">
        <label>Filter Reports:</label>
        <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Bar Chart for Stock Overview */}
      <h4>Stock Overview</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={reportData}>
          <XAxis dataKey="product_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity_in_stock" fill="#8884d8" name="Stock Available" />
          <Bar dataKey="quantity_sold" fill="#82ca9d" name="Stock Sold" />
        </BarChart>
      </ResponsiveContainer>

      {/* Line Chart for Stock Trends */}
      <h4>Stock Trends</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={reportData}>
          <XAxis dataKey="product_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="quantity_in_stock" stroke="#8884d8" name="Stock Available" />
          <Line type="monotone" dataKey="quantity_sold" stroke="#82ca9d" name="Stock Sold" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Reports;
