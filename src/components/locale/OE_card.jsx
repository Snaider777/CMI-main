import { BarChart } from '@mui/x-charts/BarChart';
import "../../styles/OE_card.css";
import "../../styles/OE_chart.css";

export default function OE_card({titulo, texto, color, BAR_CANTIDAD, BAR_DATOS }) {

  const ArregloCantidad = BAR_CANTIDAD;
  const ArregloDatos = BAR_DATOS;

  return (
    <div className='OE_card'>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <div className='line'></div>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ArregloDatos }]}
          series={[{ data: ArregloCantidad } ]}
          width={400}
          height={250}
          colors={color}
        />
    </div>
  )
}
