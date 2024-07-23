import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ResearchTab() {
  const accessData = {
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
    ],
    datasets: [
      {
        label: 'Lưu lượng truy cập',
        // hardcode data for now
        data: [0, 150, 160, 430, 700, 1200, 1500],
        fill: true,
        backgroundColor: 'rgba(116,39,116, 0.2)',
        borderColor: 'rgba(116,39,116, 1)',
      },
    ],
  };
  const interactionsData = {
    labels: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
    ],
    datasets: [
      {
        label: 'Mức độ tương tác',
        // hardcode data for now
        data: [0, 320, 260, 480, 900, 1050, 1500],
        fill: true,
        backgroundColor: 'rgba(116,170,238, 0.2)',
        borderColor: 'rgba(116,170,238, 1)',
      },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ lưu lượng truy cập',
        color: 'black',
        font: {
          size: 24,
        },
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ mức độ tương tác',
        color: 'black',
        font: {
          size: 24,
        },
      },
    },
  };
  return (
    <div className='research-tab flex flex-col items-center gap-8'>
      <div className='charts-container w-3/4 p-4 '>
        <Line data={accessData} options={options1} className='mb-16' />
        <Line data={interactionsData} options={options2} />
      </div>
    </div>
  );
}
