// ---------------------------------------------------
const Chart = require( 'chart.js' );
// ---------------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    // FUNCTION TRANSLATE DEGREES TO RADIANS
    // ---------------------------------------------------
    Math.radians = function ( degrees ) {
        return degrees * Math.PI / 180;
    };
    // ---------------------------------------------------
    let plotDoughnutChart = document.querySelector( '#doughnut-chart' );
    plotDoughnutChart.height = 130;
    const dataDoughnut = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular' ],
        datasets: [
            {
                label: 'Frontend Developer Skills',
                backgroundColor: [ '#404f66', '#87aaa3', '#afd9d7', '#f9f1e6', '#f2c397' ],
                data: [ 98, 92, 78, 66, 23 ]
            }
        ]
    };
    const optionsDoughnut = {
        animation: {
            duration: 2000,
            animateScale: true
        },
        cutoutPercentage: 80,
        rotation: Math.radians( -80 )
    };
    const doughnutChart = new Chart( plotDoughnutChart, {
        type: 'doughnut',
        data: dataDoughnut,
        options: optionsDoughnut
    });
    // ---------------------------------------------------
    // -------------------------------------------------------
}, false );

