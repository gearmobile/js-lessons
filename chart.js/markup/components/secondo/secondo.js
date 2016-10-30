// ---------------------------------------------------
const Chart = require( 'chart.js' );
// ---------------------------------------------------
window.addEventListener( 'load', function () {
    //
    Chart.defaults.scale.ticks.beginAtZero = true;
    // ---------------------------------------------------
    let plotBarChart = document.querySelector( '#bar-chart' );
    plotBarChart.height = 130;
    const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May' ],
        datasets: [
            {
                label: 'Simple Bar Chart',
                backgroundColor: '#789',
                borderColor: '#234',
                data: [ 100, 200, 300, 600, 400 ]
            },
            {
                label: 'Simple Bar Chart Second',
                backgroundColor: 'salmon',
                borderColor: 'firebrick',
                data: [ 200, 400, 600, 800, 300 ]
            },
            {
                label: 'Simple Bar Chart Third',
                backgroundColor: 'green',
                borderColor: 'green',
                data: [ 300, 500, 700, 400, 200 ]
            }
        ]
    };
    const barChart = new Chart( plotBarChart, {
        type: 'bar',
        data: data
    });
    // ---------------------------------------------------
}, false );
