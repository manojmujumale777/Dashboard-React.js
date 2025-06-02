import React from "react";


import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar
} from "recharts";

const data = [
  { date: "26 Jun", count: 200 },
  { date: "27 Jun", count: 400 },
  { date: "28 Jun", count: 100 },
  { date: "29 Jun", count: 200 },
  { date: "30 Jun", count: 300 },
  { date: "1 Aug", count: 200 },
  { date: "2 Aug", count: 400 },
  { date: "3 Aug", count: 600 }
];

function renderLineChart() {
  return (
    <div className="mt-lg-4">
      <div className="App">
        <LineChart className="w-100 " 
          width={930}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}



export default function Comp2() {
  return (
    <div>
      {renderLineChart()}

    </div>
  );
}
