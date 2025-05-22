import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Power Usage (kW)",
      data: [12, 19, 14, 15, 22, 18, 24],
      fill: false,
      borderColor: "#5cb85c",
      backgroundColor: "#5cb85c",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Power Usage Over the Week",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartCard = () => {
  return (
    <div style={{ height: "100%", padding: "10px", boxSizing: "border-box" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartCard;
