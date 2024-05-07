"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const ThinDoughnutChart = () => {
  const data = {
    labels: ["Label 1", "Label 2"],
    datasets: [
      {
        data: [60.34, 8],
        backgroundColor: ["#1B59F8", "#E5E5E5"],
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
    cutout: "80%",
  };

  const plugins = [
    {
      id: "doughnutCenterText",
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        const { width, height } = chart.canvas;
        ctx.restore();

        // First line of text
        let fontSize = (height / 114).toFixed(2);
        ctx.font = `bold ${fontSize}em sans-serif`;
        ctx.textBaseline = "middle"; // Align text by the middle of the font
        let text = "42,600",
          textX = Math.round((width - ctx.measureText(text).width) / 2) - 20, // Subtract 10 to move text to the left
          textY = height / 2 - parseFloat(fontSize) * 15; // Convert fontSize to number
        ctx.fillText(text, textX, textY);

        // Second line of text
        fontSize = (height / 228).toFixed(2); // Smaller font size
        ctx.font = `${fontSize}em sans-serif`; // Not bold
        (text = "Products"),
          (textX = Math.round((width - ctx.measureText(text).width) / 2) - 23), // Subtract 10 to move text to the left
          (textY = height / 2 + parseFloat(fontSize) * 5); // Position below the first line, convert fontSize to number
        ctx.fillText(text, textX, textY);

        ctx.save();
      },
    },
  ];

  return <Doughnut data={data} options={options} plugins={plugins} />;
};

export default ThinDoughnutChart;
