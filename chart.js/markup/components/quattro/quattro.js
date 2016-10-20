const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    //
    let plotPolarChart = document.querySelector( '#polar-chart' );
    //
    const dataPolarChart = {
        labels: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Angular' ],
        datasets: [
            {
                label: 'Frontend Developer Skills',
                backgroundColor: [ '#404f66', '#87aaa3', '#afd9d7', '#f9f1e6', '#f2c397' ],
                data: [ 98, 92, 78, 66, 23 ]
            }
        ]
    };
    //
    const optionsPolarChart = {
        animation: {
            // animateRotate: false,
            animateScale: false,
            duration: 2000
        },
        scales: {
            ticks: {
                beginAtZero: true
            }
        }
    };
    //
    const polarChart = new Chart( plotPolarChart, {
        type: 'polarArea',
        data: dataPolarChart,
        options: optionsPolarChart
    });
    //
}, false );
