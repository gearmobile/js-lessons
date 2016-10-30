// ---------------------------------------------------
const Chart = require( 'chart.js' );
// ---------------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    let plotPieChart = document.querySelector( '#pie-chart' );
    plotPieChart.height = 130;
    const dataPie = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular' ],
        datasets: [
            {
                label: 'Frontend Developer Skills',
                backgroundColor: [ '#404f66', '#87aaa3', '#afd9d7', '#f9f1e6', '#f2c397' ],
                data: [ 98, 92, 78, 66, 23 ]
            }
        ]
    };
    const optionsPie = {
        animation: {
            duration: 2000,
            animateScale: true
        }
    };
    const pieChart = new Chart( plotPieChart, {
        type: 'pie',
        data: dataPie,
        options: optionsPie
    });
    // ---------------------------------------------------
}, false );
