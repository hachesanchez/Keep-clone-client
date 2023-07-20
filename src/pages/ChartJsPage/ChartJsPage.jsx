import { useState } from "react"
import ChartJsExample from "../../components/Chart.jsx/ChartJsExample"
import { UserData } from './../../utils/Data'
import BarChartExample from "../../components/Chart.jsx/BarChartExample"

const ChartJsPage = () => {

    const [userData, setUserData] = useState({

        labels: UserData.map((elm) => elm.year),
        datasets: [{
            label: 'Users gained',
            data: UserData.map((elm) => elm.userGain),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]

    })

    return (
        <div>
            <ChartJsExample chartData={userData} />
            <BarChartExample chartData={userData} />
        </div>
    )
}

export default ChartJsPage
