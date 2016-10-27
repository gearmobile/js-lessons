// ---------------------------------------------------
const Chart = require( 'chart.js' );
// ---------------------------------------------------
window.addEventListener( 'load', function () {
    // -----------------------------------------------------------
    // GET ELEMENT
    // -----------------------------------------------------------
    const plot = document.querySelector( '#lineChart' );
    // -----------------------------------------------------------
    // SET GLOBAL CONFIGURATION
    // -----------------------------------------------------------
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.animation.duration = 600;
    Chart.defaults.global.animation.onComplete = function () {
        console.log( 'Animation completed' );
    };
    // -----------------------------------------------------------
    // SET DATA
    // ----------------- ------------------------------------------
    const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
        datasets: [
            {
                label: 'Simple Line Chart',
                data: [ 65, 59, 80, 81, 56, 55, 40 ]
            }
        ]
    };
    // -----------------------------------------------------------
    // SET COMPLEX DATA
    // -----------------------------------------------------------
    const complexData = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'September' ],
        datasets: [
            {
                label: 'First Complex Line Chart',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba( 75, 192, 192, 0.4 )',
                borderColor: 'rgba( 75, 192, 192, 1 )',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba( 75, 192, 192, 1 )',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba( 75, 192, 192, 1 )',
                pointHoverBorderColor: 'rgba( 220, 220, 220, 1 )',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [ 65, 59, 80, 81, 56, 55, 40, 20 ],
                spanGaps: false
            },
            {
                label: 'Second Complex Line Chart',
                fill: true,
                lineTension: 0,
                backgroundColor: 'rgba( 75, 82, 192, 0.6 )',
                borderColor: 'rgba( 75, 82, 192, 1 )',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba( 75, 82, 192, 1 )',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba( 75, 82, 192, 1 )',
                pointHoverBorderColor: 'rgba( 220, 220, 220, 1 )',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [ 75, 69, 90, 31, 26, 105, 30, 200 ],
                spanGaps: false
            }
        ]
    };
    // -----------------------------------------------------------
    // SET LINE CHART OPTIONS
    // -----------------------------------------------------------
    const lineChartOptions = {
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    // ---------------------------------------------------------------
    // SET CHART
    // ---------------------------------------------------------------
    const lineChart = new Chart( plot, {
        type: 'line',
        data: complexData,
        options: lineChartOptions
    });
    // ---------------------------------------------------------------
}, false );

