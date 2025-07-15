"use client";
import React, { useState } from "react";
import { salesData } from "@/data/salesData";
import ChartToggle from "../atoms/ChartToggle";
import ThresholdInput from "../atoms/ThresholdInput";
import ChartContainer from "../molecules/ChartContainer";

export default function SalesDashboard() {
  const [chartType, setChartType] = useState<"Bar" | "Line" | "Pie">("Bar");
  const [threshold, setThreshold] = useState(0);
  const filteredData = salesData.filter(item => item.sales >= threshold);

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-slate-900/60 backdrop-blur-lg shadow-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">🚀 Sales Dashboard</h1>
      <ThresholdInput threshold={threshold} setThreshold={setThreshold} />
      <ChartToggle chartType={chartType} setChartType={setChartType} />
      <ChartContainer data={filteredData} chartType={chartType} />
    </div>
  );
}