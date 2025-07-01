import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultPieChart = ({ hits, errors }) => {
  const data = {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        data: [hits, errors],
        backgroundColor: ["#8057FE", "#5535B5"],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[220px] h-[220px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ResultPieChart;
