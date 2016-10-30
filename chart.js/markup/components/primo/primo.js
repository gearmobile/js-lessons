// ------------------------------------------------------
const Chart = require( 'chart.js' );
// ------------------------------------------------------
window.addEventListener( 'load', function () {
    //
    Chart.defaults.scale.ticks.beginAtZero = true;
    //
    let plotLineChart = document.querySelector( '#line-chart' );
    const data = {
        labels: [ 'Uno', 'Duo', 'Tre', 'Quattro', 'Cinque', 'Sei' ],
        datasets: [
            {
                label: 'First Line Chart',
                borderWidth: 2,
                borderColor: 'green',
                backgroundColor: 'rgba( 62, 52, 71, 0.6 )',
                data: [ 20, 40, 50, 60, 20, 10 ]
            },
            {
                label: 'Second Line Chart',
                borderWidth: 3,
                borderColor: 'firebrick',
                backgroundColor: 'rgba( 172, 72, 91, 0.5 )',
                data: [ 100, 60, 120, 50, 110, 90 ]
            }
        ]
    };
    const lineChart = new Chart( plotLineChart, {
        type: 'line',
        data: data
    });
}, false );
// ------------------------------------------------------
