import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["May'24", "15 May", "Jun'24", "15 Jun", "July'24", "15 July", "August'24"];
const data1 = [37, 11, 14, 52, 14, 32, 36];
const data2 = [22, 25, 42, 32, 24, 62, 66];

const data = {
  labels,
  datasets: [
    {
      label: "A",
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "B",
      data: data2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Comp3 (){
  return <Bar options={options} data={data} />;
};
