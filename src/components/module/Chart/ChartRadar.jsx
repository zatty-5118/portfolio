"use client";

import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register( RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend );

export default function ChartRadar({ data }) {
    const labels = data.map((d) => d.label);
    const values = data.map((d) => d.value);

    const chartData = {
        labels,
        datasets: [
            {
                label: "スコア",
                data: values,
                fill: true,
                backgroundColor: "#6699cc57",
                borderColor: "#3d85cc",
                pointBackgroundColor: "#3d85cc",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    title: (items) => {
                        const index = items[0].dataIndex;
                        return data[index].label;
                    },
                    label: (item) => {
                        const index = item.dataIndex;
                        return [
                            `スコア: ${item.raw}`,
                            data[index].description,
                        ];
                    },
                },
            },
        },
        scales: {
            r: {
                min: 0,
                max: 5,
                ticks: { stepSize: 1 },
            },
        },
    };

  return <Radar data={chartData} options={options} />;
}
