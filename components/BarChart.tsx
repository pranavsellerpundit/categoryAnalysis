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

interface BarChartProps {
  data: number[];
  labels: string[];
  displayXTitle: string;
  displayYTitle: string;
  barColor: string;
  yAxisTicksType: string;
  yAxisMin: number;
  yAxisMax: number;
  yAxisStepSize: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  displayXTitle,
  displayYTitle,
  barColor,
  yAxisTicksType,
  yAxisMin,
  yAxisMax,
  yAxisStepSize,
}) => {
  const isXTitleDisplayed = displayXTitle !== "";
  const isYTitleDisplayed = displayYTitle !== "";
  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: barColor,
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
                text: displayXTitle,
                font: {
                  size: 14,
                },
              },
              border: {
                display: false,
              },
            },

            // to remove the y-axis labels
            y: {
              min: yAxisMin,
              max: yAxisMax,
              display: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                callback: (value: any, index, ticks) => {
                  if (yAxisTicksType === "percentage") {
                    return value + "%";
                  } else if (value >= 1000) {
                    return value / 1000 + "k";
                  }
                  return value;
                },

                stepSize: yAxisStepSize,
                font: {
                  size: 12,
                },
              },
              title: {
                display: true,
                text: displayYTitle,
              },
            },
          },
        }}
      ></Bar>
    </div>
  );
};

export default BarChart;
