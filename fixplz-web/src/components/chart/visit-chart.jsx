// import React, { useState, useEffect } from "react";
import "./visit-chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

export const VisitChart = () => {
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -20,
        align: "start",
      },
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "방문자 현황",
      // },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "일일 방문자 수",
        data: [100, 200, 300, 200, 125, 333, 550],
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "전체 방문자 수",
        data: [100, 200, 300, 400, 525, 633, 755],
        backgroundColor: "rgba(53, 162, 235, 0.3)",
        borderColor: ["rgb(54, 162, 235)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
