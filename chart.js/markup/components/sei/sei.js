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
    // ---------------------------------------------------
    // DATA DOUGHNUT CHART
    // ----------------------------------------------------
    const dataDoughnutChart = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular' ],
        datasets: [
            {
                label: 'Frontend Developer Skills',
                backgroundColor: [ '#05668d', '#028090', '#00a896', '#02c39a', '#f0f3bd' ],
                data: [ 98, 92, 78, 66, 23 ]
            }
        ]
    };
    // -------------------------------------------------------
    // OPTIONS DOUGHNUT CHART
    // -------------------------------------------------------
    const optionsDoughnutChart = {
        animation: {
            animateScale: true
        },
        cutoutPercentage: 70,
        rotation: Math.radians( -90 )
    };
    // -------------------------------------------------------
    // DOUGHNUT CHART
    // -------------------------------------------------------
    const doughnutChart = new Chart( plotDoughnutChart, {
        type: 'doughnut',
        data: dataDoughnutChart,
        options: optionsDoughnutChart
    });
    // -------------------------------------------------------
}, false );

