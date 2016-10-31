const Chart = require( 'chart.js' );
// --------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------
    const scatterPlot = document.querySelector( '#scatter' );
    // ----------------------------------------------
    const scatterData = {
        datasets: [
            {
                label: 'Scatter Chart',
                data: [
                    { x: 20, y: 10 },
                    { x: 50, y: 30 },
                    { x: 90, y: 50 },
                    { x: 10, y: 20 },
                    { x: 60, y: 80 },
                    { x: 40, y: 10 }
                ]
            }
        ]
    };
    // ----------------------------------------------
    const scatterOptions = {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        hoverMode: 'single'
    };
    // ----------------------------------------------
    const scatterCanvas = new Chart( scatterPlot, {
        type: 'line',
        data: scatterData,
        options: scatterOptions
    });
    // ----------------------------------------------
}, false );


