import React from "react";
import { Pie } from "react-chartjs-2";

export default function Comp4() {
  return (
    <div className="mt-lg-3">
      <Pie 
        data={{
          labels: ["Stocks", "Funds", "Bond"],
          datasets: [
            {
              label: "no. of votes",
              data: [1624, 1267, 1153],
              backgroundColor: [
                "#8B96FF",
                "#A73B9B",
                "#FF5D9F"
              ],
              borderColor: "white",
              borderwidth: 1
            }
          ]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};


