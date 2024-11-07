import "./BarChartSection.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BarChartSection({ className, menuItems, data }) {
  // Prepare the data in the format Recharts expects
  const chartData = menuItems.map((item, index) => ({
    name: item,
    value: data[index] || 0,
  }));

  return (
    <div className={`bar-chart-section ${className || ""}`}>
      <ResponsiveContainer fill={"green"} width="100%" height={300}>
        <BarChart  data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#37323e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartSection;
