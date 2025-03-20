import { BarChart } from '@mui/x-charts/BarChart';
import "../../styles/OE_card.css";
import "../../styles/OE_chart.css";

export default function OE_card({titulo, texto, BAR_CANTIDAD, BAR_DATOS }) {

  const ArregloDatos = [BAR_CANTIDAD];

  return (
    <div className='OE_card'>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Perspectiva 1', 'Perspectiva 2', 'Perspectiva 3', 'Perspectiva 4'] }]}
          series={[{ data: [30,22,15,21] } ]}
          width={500}
          height={300}
        />
    </div>
  )
}
