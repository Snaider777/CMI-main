import { BarChart } from '@mui/x-charts/BarChart';
import "../../styles/OE_card.css";

export default function OE_card({nombre, descripcion, BAR_CANTIDAD, BAR_DATOS }) {
  return (
    <div className='OE_card'>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <div className='line'></div>
        <BarChart
          xAxis={[{ scaleType: 'band', data: BAR_DATOS}]}
          yAxis={[{
            colorMap: {
              type: 'piecewise',
              thresholds: [40, 80],
              colors: ['red', 'orange', 'green'],
            }
          }]}
          series={[{ data: BAR_CANTIDAD, id: 'serie' }]}
          width={400} 
          height={250}
          onItemClick={(event, context, index) => {
            console.log(context)
          }}
        />
    </div>
  )
}
