"use client";
import React from "react";

type Props = {
  chartType: "Bar" | "Line" | "Pie";
  setChartType: (type: "Bar" | "Line" | "Pie") => void;
};

export default function ChartToggle({ chartType, setChartType }: Props) {
  const buttons: ("Bar" | "Line" | "Pie")[] = ["Bar", "Line", "Pie"];

  return (
    <div className="flex gap-3 mt-2 mb-6" style={{width: "331px", justifyContent: "space-between", padding:"15px"}}>
      {buttons.map(type => (
        <button
          key={type}
          onClick={() => setChartType(type)}
          className={`px-7 py-2 rounded-xl font-semibold transition 
          duration-300 shadow-md transform
          ${chartType === type
            ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-white scale-105 ring-2 ring-offset-2 ring-cyan-400"
            : "bg-white bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-102"}`}
        >
          {type} Chart
        </button>
      ))}
    </div>
  );
}

