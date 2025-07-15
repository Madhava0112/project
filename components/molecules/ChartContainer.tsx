"use client";
import React from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#22d3ee", "#a78bfa", "#facc15", "#fb7185", "#38bdf8"];

type Props = {
  data: { year: number; sales: number }[];
  chartType: "Bar" | "Line" | "Pie";
};

export default function ChartContainer({ data, chartType }: Props) {
  let chartElement: React.ReactElement;

  if (chartType === "Bar") {
    chartElement = (
      <BarChart data={data}>
        <XAxis dataKey="year" stroke="#f9fafb" />
        <YAxis stroke="#f9fafb" />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#22d3ee" radius={[8,8,0,0]} />
      </BarChart>
    );
  } else if (chartType === "Line") {
    chartElement = (
      <LineChart data={data}>
        <XAxis dataKey="year" stroke="#f9fafb" />
        <YAxis stroke="#f9fafb" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#a78bfa" strokeWidth={3} />
      </LineChart>
    );
  } else {
    chartElement = (
      <PieChart>
        <Pie data={data} dataKey="sales" nameKey="year"
          cx="50%" cy="50%" outerRadius={90} label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }

  return (
    <motion.div
      className="w-full h-[400px] bg-white bg-opacity-10 backdrop-blur rounded-2xl shadow-lg p-4"
      key={chartType}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{paddingTop: "80px"}}
    >
      <ResponsiveContainer width="100%" height="100%">
        {chartElement}
      </ResponsiveContainer>
    </motion.div>
  );
}
