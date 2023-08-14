import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const ChartJsExample = ({ chartData }) => {

    return (

        <div>
            Doughnut todo okay
            <Doughnut data={chartData} />

        </div >
    )
}

export default ChartJsExample