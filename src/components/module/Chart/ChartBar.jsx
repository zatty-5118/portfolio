"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ChartBar({ data }) {
  const labels = data.map((d) => d.label);
  const values = data.map((d) => d.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "スコア",
        data: values,
        backgroundColor: "#6699cc57",
        borderColor: "#3d85cc",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (items) => data[items[0].dataIndex].label,
          label: (item) => {
            const idx = item.dataIndex;
            return [`スコア: ${item.raw}`, data[idx].description];
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
        grid: { drawBorder: false },
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
