"use client";
import {
  BubbleDataPoint,
  ChartData,
  Point,
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
} from "chart.js";
import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Legend);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  borderSkipped: boolean;
  barPercentage: number;
  categoryPercentage: number;
}

interface DoubleBarChartProps {
  datasets: Dataset[];
}

const DoubleBarChart: React.FC<DoubleBarChartProps> = ({ datasets }) => {
  const data: ChartData<"bar", number[], string> = {
    labels: [
      "250/210",
      "150/200",
      "180/150",
      "200/230",
      "180/60",
      "110/90",
      "130/110",
    ],
    datasets,
  };

  const options = {
    aspectRatio: 3,
    responsive: true,
    elements: {
      point: {
        radius: 100,
      },
    },
    //backgroundBar
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
        },
        border: {
          display: false,
        },
      },

      // to remove the y-axis labels
      y: {
        min: 0,
        max: 250,
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          callback: (value: any, index: any, ticks: any) => {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
          stepSize: 10,
          font: {
            size: 12,
          },
        },
        title: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DoubleBarChart;
