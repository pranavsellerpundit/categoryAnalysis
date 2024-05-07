// components/MyLineChart.tsx
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarController,
  BarElement,
  Legend
);

const HorizontalBarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["10k+", "5k-10k", "2k-5k", "1k-2k", "0"],
          datasets: [
            {
              data: [24, 12, 20, 18, 26],
              backgroundColor: ["#1B59F8"],
              borderWidth: 1,
              barPercentage: 0.6,
              borderRadius: 50,
              borderSkipped: false,
              categoryPercentage: 0.8,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          aspectRatio: 3,
          responsive: true,
          elements: {
            point: {
              radius: 100,
            },
          },
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
                display: true,
                text: "Percentage of Products",
              },
              border: {
                display: false,
              },
            },

            // to remove the y-axis labels
            y: {
              //   min: 0,
              //   max: 30000,
              display: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              title: {
                display: true,
                text: "Price Range (INR)",
              },
            },
          },
        }}
      ></Bar>
    </div>
  );
};

export default HorizontalBarChart;
