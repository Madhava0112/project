"use client";
import React, { useState } from "react";
import { salesData } from "@/data/salesData";
import ChartToggle from "@/components/atoms/ChartToggle";
import ThresholdInput from "@/components/atoms/ThresholdInput";
import ChartContainer from "@/components/molecules/ChartContainer";

export default function Page() {
  const [chartType, setChartType] = useState<"Bar" | "Line" | "Pie">("Bar");
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData.filter(item => item.sales >= threshold);

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-4xl font-bold mb-4" style={{paddingTop: '20px'}}>Sales Dashboard</h1>
      <ThresholdInput threshold={threshold} setThreshold={setThreshold} />
      <ChartToggle chartType={chartType} setChartType={setChartType} />
      <ChartContainer data={filteredData} chartType={chartType} />
    </div>
  );
}
