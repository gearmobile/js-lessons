// ----------------------------------------
const Chart = require( 'chart.js' );
// ----------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------
    const mixedPlot = document.querySelector( '#mixed' );
    // ------------------------------------------
    const mixedData = {
        labels: [ 'Uno', 'Duo', 'Tre', 'Quattro' ],
        datasets: [
            {
                type: 'line',
                label: 'Line Chart',
                data: [ 20, 50, 90, 120 ],
                backgroundColor: 'rgba( 152, 179, 158, 0.6 )',
                borderColor: 'rgba( 75, 88, 78, 0.6 )',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Bar Chart',
                data: [ 40, 120, 30, 60 ],
                backgroundColor: 'salmon',
                borderColor: 'firebrick',
                borderWidth: 3
            }
        ]
    };
    // ------------------------------------------
    const mixedOptions = {};
    // ------------------------------------------
    const mixedCanvas = new Chart( mixedPlot, {
        type: 'bar',
        data: mixedData,
        options: mixedOptions
    });
}, false );
