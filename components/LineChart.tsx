"use client";
import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1 month", "2 month", "Quarter", "15", "20", "25", "30"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      tension: 4,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192)",
      borderColor: "#054BD8",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [0, 25, 15, 35, 56, 73, 25],
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#E5E5E5",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [25, 15, 10, 56, 30, 22, 12],
    },
  ],
};

const options = {
  aspectRatio: 3,
  responsive: true,
  elements: {
    point: {
      radius: 100,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  //working hide
  scales: {
    // to remove the labels

    x: {
      ticks: {
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
        text: "Products Count Range",
      },
      border: {
        display: false,
      },
    },

    // to remove the y-axis labels
    y: {
      min: 0,
      max: 75,
      display: true,
      grid: {
        display: true,
      },
      border: {
        display: false,
      },
      ticks: {
        callback: (value: any, index, ticks) => {
          return value + "%";
        },
        stepSize: 25,
        font: {
          size: 12,
        },
      },
      title: {
        display: false,
        text: "Number of Brands",
      },
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
