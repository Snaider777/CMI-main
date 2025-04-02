// pages/HomePage.js
import DoughnutChart from '../components/locale/DoughnutChart';
// import Cards from '../components/locale/Cards';
import '../styles/HomePageStyle.css';

const HomePage = () => {

  //informacino apra los fgradicos de dona
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  //informacion para el resto del grafic (ya estaban)
   const barChartData1 = [
    { name: 'Jan', views: 4000, downloads: 2400 },
    { name: 'Feb', views: 3000, downloads: 1398 },
    { name: 'Mar', views: 2000, downloads: 9800 },
    { name: 'Apr', views: 2780, downloads: 3908 },
    { name: 'May', views: 1890, downloads: 4800 },
    { name: 'Jun', views: 2390, downloads: 3800 },
  ];

  const barChartData2 = [
    { name: 'Jan', views: 2000, downloads: 1200 },
    { name: 'Feb', views: 1500, downloads: 700 },
    { name: 'Mar', views: 1000, downloads: 4900 },
    { name: 'Apr', views: 1390, downloads: 1954 },
    { name: 'May', views: 945, downloads: 2400 },
    { name: 'Jun', views: 1195, downloads: 1900 },
  ];

  const barChartData3 = [
    { name: 'Jan', views: 6000, downloads: 3600 },
    { name: 'Feb', views: 4500, downloads: 2100 },
    { name: 'Mar', views: 3000, downloads: 14700 },
    { name: 'Apr', views: 2085, downloads: 5862 },
    { name: 'May', views: 2835, downloads: 7200 },
    { name: 'Jun', views: 3585, downloads: 5700 },
  ];

  return (
    <div className="CardsContainer">
      <h1>Dashboard</h1>
      <div className="chart-row">
        <DoughnutChart data={data} options={options} />
        <DoughnutChart data={data} options={options} />
        <DoughnutChart data={data} options={options} />
      </div>
          <div >
      <Cards
        title="Objetivo cuatro"
        value="45%"
        interval="Ultimo año"
        trend="down"
        data={[
          200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360,
          340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460,
          600, 880, 920,
        ]}
      />
      <Cards
        title="Objetivo Dos"
        value="75%"
        interval="Ultimo año"
        trend="neutral"
        data={[
          200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360,
          340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460,
          600, 880, 920,
        ]}
        />
        <Cards
        title="Objetivo tres"
        value="95%"
        interval="Ultimo año"
        trend="up"
        data={[
          200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360,
          340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460,
          600, 880, 920,
        ]}
        />
    </div>
    </div>
  );
};

export default HomePage;
