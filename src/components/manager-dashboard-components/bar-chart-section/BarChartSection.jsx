import "./BarChartSection.css"
import {BarChart} from "@mui/x-charts";

function BarChartSection({className, menuItems, data}) {
  return (
    <div className={`bar-chart-section ${className ? className : ''}`}>

      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: menuItems,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            color: '#074044',
            data: data
          },
        ]}
      />
    </div>
  )
}

export default BarChartSection;