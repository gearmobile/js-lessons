// ---------------------------------------------------
const Chart = require( 'chart.js' );
// ---------------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    Chart.defaults.global.animation.duration = 500;
    Chart.defaults.scale.ticks.beginAtZero = true;
    let plotRadarChart = document.querySelector( '#radar-chart' );
    plotRadarChart.height = 130;
    const data = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'jQuery' ],
        datasets: [
            {
                label: 'Developer Bill Skills',
                borderWidth: 2,
                backgroundColor: 'rgba( 122, 180, 22, 0.4 )',
                data: [ 90, 86, 66, 22, 10, 40 ]
            },
            {
                label: 'Developer John Skills',
                borderWidth: 2,
                backgroundColor: 'rgba( 117, 19, 27, 0.8 )',
                data: [ 85, 93, 83, 49, 89, 71 ]
            }
        ]
    };
    const radarChart = new Chart( plotRadarChart, {
        type: 'radar',
        data: data
    });
    // ---------------------------------------------------
}, false );
