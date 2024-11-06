import "./BarChartSection.css"
import {BarChart} from "@mui/x-charts";

function BarChartSection({className, menuItems, data}) {
  return (
    <div className={`bar-chart-section ${className ? className : ''}`}>
      <BarChart
        sx={
        {bgcolor: '#d0d5dd' }
        }
        xAxis={[
          {
            id: 'barCategories',
            data: menuItems,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            color: '#37323e',
            data: data
          },
        ]}
      />
    </div>
  )
}

export default BarChartSection;