// ----------------------------------------------------
const Chart = require( 'chart.js' );
// ----------------------------------------------------
const barPlot = document.querySelector( '.barChart' );
barPlot.width = 800;
barPlot.height = 400;
//
Chart.defaults.scale.ticks.beginAtZero = true;
//
const barData = {
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
//
const barChart = new Chart( barPlot, {
    type: 'bar',
    data: barData
});



