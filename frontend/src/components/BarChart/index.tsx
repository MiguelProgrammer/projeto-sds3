import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });


    useEffect(() => {
        /*
        Não são aspas, são creases ``
        */
        axios.get(`${BASE_URL}/sales/success-by-seller`).then(res => {

            const data = res.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries
                    }
                ]
            });
            //console.log(chartData);

        });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        chart: {
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 9,
                blur: 7,
                color: '#000',
                opacity: 5
            }
        }
    };
    
    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );

    /*
    MOCK - Usado para testes, carregando dados estásticos
    */
}

export default BarChart;