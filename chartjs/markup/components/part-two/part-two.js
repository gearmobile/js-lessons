// ----------------------------------------------------
var Chart = require( 'chart.js' );
// ----------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------
    var barPlot = document.querySelector( '.barChart' );
    // ----------------------------------------------------
    Chart.defaults.scale.ticks.beginAtZero = true;
    // ----------------------------------------------------
    var barData = {
        labels: [ 'Uno', 'Duo', 'Tre', 'Quattro', 'Cinque', 'Sei', 'Sedici' ],
        datasets: [
            {
                label: 'Simple Bar Chart',
                borderColor: '#789',
                backgroundColor: '#789',
                borderWidth: 2,
                data: [ 20, 40, 50, 70, 10, 90, 30 ]
            }
        ]
    };
    // ----------------------------------------------------
    var barChart = new Chart( barPlot, {
        type: 'bar',
        data: barData
    });
}, false );




