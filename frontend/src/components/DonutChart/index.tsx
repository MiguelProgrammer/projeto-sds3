import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    series: number[];
    labels: string[];
}

function DonutChart() {

    //MÁ PRÁTICA
    let chartData : ChartData = { series: [], labels: []};

    /*
    Não são aspas, são creases ``
    */
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then(res => { 

        const data = res.data as SaleSum[];
        const mySeries = data.map(x => x.sum);
        const myLabels = data.map(x => x.sellerName);
        
        chartData = {series: mySeries, labels: myLabels};

        console.log(chartData); 
    
    });

    /*const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }*/
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options={{ ...options, labels: chartData.labels}}
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