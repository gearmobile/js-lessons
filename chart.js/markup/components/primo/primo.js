// ------------------------------------------------------
const Chart = require( 'chart.js' );
// ------------------------------------------------------
window.addEventListener( 'load', function () {
    // DEFINE PLOT
    // ---------------------------------------------------
    let plotLineChart = document.querySelector( '#line-chart' );
    plotLineChart.width = 800;
    plotLineChart.height = 400;
    //
    Chart.defaults.scale.ticks.beginAtZero = true;
    //
    const data = {
        labels: [ 'Uno', 'Duo', 'Tre', 'Quattro', 'Cinque', 'Sei', 'Sedici' ],
        datasets: [
            {
                label: 'First Line Chart',
                borderWidth: 2,
                borderColor: 'green',
                backgroundColor: 'rgba( 62, 52, 71, 0.6 )',
                data: [ 20, 40, 50, 60, 20, 10, 50 ]
            },
            {
                label: 'Second Line Chart',
                borderWidth: 3,
                borderColor: 'firebrick',
                backgroundColor: 'rgba( 172, 72, 91, 0.5 )',
                data: [ 100, 60, 120, 50, 110, 90, 120 ]
            }
        ]
    };
    const barChart = new Chart( plotLineChart, {
        type: 'line',
        data: data
    });
}, false );
// ------------------------------------------------------

