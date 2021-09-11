import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    series: number[];
    labels: string[];
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] });

    useEffect(() => {
        /*
        Não são aspas, são creases ``
        */
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then(res => {

            const data = res.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLabels, series: mySeries});
            //console.log(chartData);

        });
    }, []);

    /*
    MÁ PRÁTICA
    let chartData : ChartData = { series: [], labels: []};
    */
   
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            id="charat"
            series={chartData.series}
            type="donut"
            height="240"
        />

    );

    /*
    MOCK - Usado para testes, carregando dados estásticos
    */
}

export default DonutChart;