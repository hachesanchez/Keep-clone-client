import { Line } from "react-chartjs-2";

const BarChartExample = ({ chartData }) => {

    return (
        <div>
            Doughnut todo okay
            <Line data={chartData} />
        </div>
    )
}

export default BarChartExample
