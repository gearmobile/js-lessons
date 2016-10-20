const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    // FUNCTION TRANSLATE DEGREES TO RADIANS
    // ---------------------------------------------------
    Math.radians = function ( degrees ) {
        return degrees * Math.PI / 180;
    };
    //
    let plotPieChart = document.querySelector( '#pie-chart' );
    let plotDoughnutChart = document.querySelector( '#doughnut-chart' );
    // DATA PIE CHART
    // ---------------------------------------------------
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
    // OPTIONS PIE CHART
    // -------------------------------------------------------
    const optionsPieChart = {
        animation: {
            animateScale: true
        }
    };
    // OPTIONS DOUGHNUT CHART
    // -------------------------------------------------------
    const optionsDoughnutChart = {
        animation: {
            animateScale: true
        },
        cutoutPercentage: 70,
        rotation: Math.radians( -90 )
    };
    // PIE CHART
    // -------------------------------------------------------
    const pieChart = new Chart( plotPieChart, {
        type: 'pie',
        data: dataPieChart,
        options: optionsPieChart
    });
    // DOUGHNUT CHART
    // -------------------------------------------------------
    const doughnutChart = new Chart( plotDoughnutChart, {
        type: 'doughnut',
        data: dataDoughnutChart,
        options: optionsDoughnutChart
    });
    //
}, false );
