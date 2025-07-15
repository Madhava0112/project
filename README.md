Sales Dashboard 
An interactive, modern sales dashboard built with Next.js, Tailwind CSS, Recharts, and Framer Motion, letting you visualize your sales data dynamically with Bar, Line, and Pie charts.

✨ Features
✅ Filter by Sales Threshold — input a minimum sales figure and watch your dashboard update in real-time.
✅ Switch Between Charts — toggle instantly between Bar, Line, and Pie charts to analyze trends.
✅ Beautiful Animations — charts smoothly fade & slide into view with Framer Motion.
✅ Responsive Design — works flawlessly on desktops, tablets, and mobile.
✅ Modern UI — gradient highlights, glassmorphism cards, and elegant typography.

🛠 Tech Stack

Framework: Next.js

Styling: Tailwind CSS

Charts: Recharts

Animations: Framer Motion

Icons: Lucide React

Getting Started

Clone the repo

git clone https://github.com/Madhava0112/project.git
cd sales-dashboard

Install dependencies

npm install
# or
yarn install

Run the dev server

npm run dev
# or
yarn dev

Then open http://localhost:3000.



📝 Project Structure

/
├── app/
│   ├── page.tsx           # Main dashboard page
│   └── layout.tsx         # Root layout
├── components/
│   ├── ChartContainer.tsx # Renders Bar, Line, Pie charts
│   ├── ChartToggle.tsx    # Chart type toggle buttons
│   └── ThresholdInput.tsx # Sales threshold input
├── data/
│   └── salesData.ts       # Sample sales data
├── public/
│   └── images/...         # (Optional) background images
├── styles/
│   └── globals.css
├── package.json
└── tailwind.config.js


Change sample data in data/salesData.ts to your actual data.
