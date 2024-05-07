"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

interface DoughnutChartProps {
  backgroundColor: string[];
  chartData: number[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  backgroundColor,
  chartData,
}) => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: chartData,
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    plugins: {
      backgroundBar: false,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
