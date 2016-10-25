const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    // FUNCTION TRANSLATE DEGREES TO RADIANS
    // -------------------------------------------------------
    Math.radians = function ( degrees ) {
        return degrees * Math.PI / 180;
    };
    //
    let plotPieChart = document.querySelector( '#pie-chart' );
    // -------------------------------------------------------
    // DATA PIE CHART
    // -------------------------------------------------------
    const dataPieChart = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular' ],
        datasets: [
            {
                label: 'Frontend Developer Skills',
                backgroundColor: [ '#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921' ],
                data: [ 98, 92, 78, 66, 23 ]
            }
        ]
    };
    // -------------------------------------------------------
    // OPTIONS PIE CHART
    // -------------------------------------------------------
    const optionsPieChart = {
        animation: {
            animateScale: true
        }
    };
    // -------------------------------------------------------
    // PIE CHART
    // -------------------------------------------------------
    const pieChart = new Chart( plotPieChart, {
        type: 'pie',
        data: dataPieChart,
        options: optionsPieChart
    });
    // -------------------------------------------------------
}, false );
