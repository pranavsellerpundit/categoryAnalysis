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

// Define the backgroundBar plugin
const backgroundBar = {
  id: "backgroundBar",
  beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    // ... (same as in your JS file)
    const {
      data,
      ctx,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    const segment = width / 12;
    const barWidth =
      segment *
      data.datasets[0].barPercentage *
      data.datasets[0].categoryPercentage;
    const cornerRadius = 10; // Adjust the corner radius as needed

    for (let i = 0; i < 12; i++) {
      const xPosition = x.getPixelForValue(i) - barWidth / 2;
      const yPosition = top;
      const barHeight = height;

      ctx.fillStyle = "#F2F7FF";
      ctx.strokeStyle = "rgba(0, 0, 0, 0)"; // Set border color to transparent black

      // Draw rounded rectangles for the top of the bars
      ctx.beginPath();
      ctx.moveTo(xPosition + cornerRadius, yPosition);
      ctx.lineTo(xPosition + barWidth - cornerRadius, yPosition);
      ctx.quadraticCurveTo(
        xPosition + barWidth,
        yPosition,
        xPosition + barWidth,
        yPosition + cornerRadius
      );
      ctx.lineTo(xPosition + barWidth, yPosition + barHeight);
      ctx.lineTo(xPosition, yPosition + barHeight);
      ctx.lineTo(xPosition, yPosition + cornerRadius);
      ctx.quadraticCurveTo(
        xPosition,
        yPosition,
        xPosition + cornerRadius,
        yPosition
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore(); // Restore the context to its original state
  },
};

ChartJS.register(backgroundBar);

const BarChartWithLegend = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "0-1k",
            "1k-2k",
            "2k-3k",
            "3k-4k",
            "4k-5k",
            "5k-6k",
            "6k-7k",
            "6k-7k",
            "6k-7k",
            "6k-7k",
          ],
          datasets: [
            {
              data: [1800, 800, 800, 1300, 1400, 110, 130, 140, 110, 200],
              backgroundColor: ["#1B59F8"],
              borderWidth: 1,
              barPercentage: 0.2,
              borderRadius: 50,
              borderSkipped: false,
              categoryPercentage: 1.2,
            },
          ],
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
                text: "Products Count Range",
              },
              border: {
                display: false,
              },
            },

            // to remove the y-axis labels
            y: {
              min: 0,
              max: 2000,
              display: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                callback: (value: any, index, ticks) => {
                  if (value >= 1000) {
                    return value / 1000 + "k";
                  }
                  return value;
                },
                stepSize: 500,
                font: {
                  size: 12,
                },
              },
              title: {
                display: true,
                text: "Number of Brands",
              },
            },
          },
        }}
      ></Bar>
    </div>
  );
};

export default BarChartWithLegend;
