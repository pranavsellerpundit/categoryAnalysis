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

interface Dataset {
  data: number[];
  backgroundColor: string[];
  borderWidth: number;
  barPercentage: number;
  borderRadius: number;
  borderSkipped: boolean;
  categoryPercentage: number;
}

interface StackedBarChartProps {
  labels: string[];
  datasets: Dataset[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  labels,
  datasets,
}) => {
  return (
    <div>
      <Bar
        data={{
          labels,
          datasets,
        }}
        options={{
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
              stacked: true,
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
                text: "BSR Ranges",
              },
              border: {
                display: false,
              },
            },

            // to remove the y-axis labels
            y: {
              stacked: true,
              min: 0,
              max: 100,
              display: true,
              grid: {
                display: false,
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
        }}
      ></Bar>
    </div>
  );
};

export default StackedBarChart;
