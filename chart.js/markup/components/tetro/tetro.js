const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    //
    let plotRadarChart = document.querySelector( '#radar-chart' );
    //
    Chart.defaults.global.animation.duration = 500;
    Chart.defaults.scale.ticks.beginAtZero = true;
    //
    const dataRadarChart = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'jQuery' ],
        datasets: [
            {
                label: 'Developer Bill Skills',
                borderWidth: 2,
                borderColor: 'forestgreen',
                backgroundColor: 'rgba( 122, 180, 22, 0.4 )',
                data: [ 90, 86, 66, 22, 10, 40 ]
            },
            {
                label: 'Developer John Skills',
                borderWidth: 2,
                borderColor: 'rgba( 117, 19, 27, 0.8 )',
                backgroundColor: 'rgba( 227, 38, 54, 0.5 )',
                data: [ 85, 93, 83, 49, 89, 71 ]
            }
        ]
    };
    let radarChart = new Chart( plotRadarChart, {
        type: 'radar',
        data: dataRadarChart
    });
}, false );
