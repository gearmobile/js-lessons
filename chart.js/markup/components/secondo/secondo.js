const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    //
    let plotBarChart = document.querySelector( '#bar-chart' );
    plotBarChart.width = 800;
    plotBarChart.height = 400;
    Chart.defaults.scale.ticks.beginAtZero = true;
    //
    const dataBarChart = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' ],
        datasets: [
            {
                label: 'Simple Bar Chart',
                backgroundColor: '#789',
                borderColor: '#234',
                data: [ 100, 200, 400, 800, 300, 100, 600, 800 ]
            }
        ]
    };
    //
    const barChart = new Chart( plotBarChart, {
        type: 'bar',
        data: dataBarChart
    });
}, false );
