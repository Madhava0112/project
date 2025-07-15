// "use client";
// type Props = {
//   threshold: number;
//   setThreshold: (val: number) => void;
// };

// export default function ThresholdInput({ threshold, setThreshold }: Props) {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <label className="text-lg">Sales Threshold: {threshold}</label>
//       <input
//         type="range"
//         min="0"
//         max="5000"
//         step="500"
//         value={threshold}
//         onChange={(e) => setThreshold(Number(e.target.value))}
//         className="w-64"
//       />
//     </div>
//   );
// }

"use client";
import React from "react";

type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function ThresholdInput({ threshold, setThreshold }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="text-lg">Sales Threshold: {threshold}</label>
      <input
        type="range"
        min="0"
        max="5000"
        step="500"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="w-64"
      />
    </div>
  );
}
