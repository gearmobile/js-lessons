const Chart = require( 'chart.js' );
// --------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------
    let plot = document.querySelector( '#scatter' );
    //
    const plotData = {
        labels: [ 'uno', 'duo', 'tre', 'quattro' ],
        datasets: [
            {
                label: 'Scatter Chart',
                data: [ 20, '30', 10, 40 ]
            }
        ]
    };
    // ----------------------------------------------
    const plotOptions = {
        //showLines: false
        scales: {
            yAxes: [
                {
                    stacked: true
                }
            ]
        }
    };
    // ----------------------------------------------
    const scatterPlot = new Chart( plot, {
        type: 'bar',
        data: plotData,
        options: plotOptions
    });
    // ----------------------------------------------
}, false );


