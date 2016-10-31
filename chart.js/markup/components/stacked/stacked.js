// ------------------------------------------------------------
const Chart = require( 'chart.js' );
// ------------------------------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------------------------
    const plotStacked = document.querySelector( '#stacked' );
    // -----------------------------------------------------------
    const dataStacked = {
        labels: [ 'Uno', 'Duo', 'Tre', 'Quattro', 'Cinque' ],
        datasets: [
            {
                label: 'Uno Chart',
                data: [ 727, 589, 537, 543, 574 ],
                backgroundColor: 'rgba( 63, 103, 126, 1 )',
                hoverBackgroundColor: 'rgba( 50, 90, 100, 1 )'
            },
            {
                label: 'Duo Chart',
                data: [ 238, 553, 746, 884, 903 ],
                backgroundColor: 'rgba( 163, 103, 126, 1 )',
                hoverBackgroundColor: 'rgba( 140, 85, 100, 1 )'
            },
            {
                label: 'Tetro Chart',
                data: [ 1238, 553, 746, 884, 903 ],
                backgroundColor: 'rgba( 63, 203, 226, 1 )',
                hoverBackgroundColor: 'rgba( 46, 185, 235, 1 )'
            }
        ]
    };
    // ------------------------------------------------------------
    const optionsStacked = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };
    // ------------------------------------------------------------
    const stacked = new Chart( plotStacked, {
        type: 'bar',
        data: dataStacked,
        options: optionsStacked
    });
    // ------------------------------------------------------------
}, false );
