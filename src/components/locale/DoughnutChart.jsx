import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ data, options }) => {
//   console.log("lso datos del grafico:", data);
//   console.log("Opciones del grafico:", options);
  
  return (
    <div className="doughnut-chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};
