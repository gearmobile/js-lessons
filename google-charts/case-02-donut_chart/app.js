
const pieHoleValue = 0.76
const colorPrimary = 'cyan';
const colorSecondary = 'lightgrey';

function drawDonutUno() {

    // element
    // ---------------------------------------
    const pieElementUno = document.querySelector( '#pieChartUno' );
    const rawDataUno = [
        [ 'Technology', 'Skill' ],
        [ 'JavaScript', 60 ],
        [ 'NoSkill', 40 ]
    ];

    // data
    // ---------------------------------------
    const pieDataUno = google.visualization.arrayToDataTable( rawDataUno );

    // options
    // ---------------------------------------
    const pieOptionsUno = {
        pieHole: pieHoleValue,
        legend: 'none',
        pieSliceText: 'none',
        pieSliceTextStyle: {
            color: 'black',
        },
        tooltip: {
            // trigger: 'none'
        },
        slices: {
            0: { color: colorPrimary },
            1: { color: colorSecondary }
        }
    };

    // chart
    // ---------------------------------------
    const pieChartUno = new google.visualization.PieChart( pieElementUno );

    // draw
    // ---------------------------------------
    pieChartUno.draw( pieDataUno, pieOptionsUno );

} // end drawChart function

function drawDonutDuo() {

    // element
    // ---------------------------------------
    const pieElementDuo = document.querySelector( '#pieChartDuo' );
    const rawDataDuo = [
        [ 'Technology', 'Skill' ],
        [ 'HTML', 80 ],
        [ 'NoSkill', 20 ]
    ];

    // data
    // ---------------------------------------
    const pieDataDuo = google.visualization.arrayToDataTable( rawDataDuo );

    // options
    // ---------------------------------------
    const pieOptionsDuo = {
        pieHole: pieHoleValue,
        legend: 'none',
        pieSliceText: 'none',
        pieSliceTextStyle: {
            color: 'black',
        },
        tooltip: {
            // trigger: 'none'
        },
        slices: {
            0: { color: colorPrimary },
            1: { color: colorSecondary }
        }
    };

    // chart
    // ---------------------------------------
    const pieChartDuo = new google.visualization.PieChart( pieElementDuo );

    // draw
    // ---------------------------------------
    pieChartDuo.draw( pieDataDuo, pieOptionsDuo );

} // end drawChart function

function drawDonutTre() {

    // element
    // ---------------------------------------
    const pieElementTre = document.querySelector( '#pieChartTre' );
    const rawDataTre = [
        [ 'Technology', 'Skill' ],
        [ 'CSS', 80 ],
        [ 'NoSkill', 20 ]
    ];

    // data
    // ---------------------------------------
    const pieDataTre = google.visualization.arrayToDataTable( rawDataTre );

    // options
    // ---------------------------------------
    const pieOptionsTre = {
        pieHole: pieHoleValue,
        legend: 'none',
        pieSliceText: 'none',
        pieSliceTextStyle: {
            color: 'black',
        },
        tooltip: {
            // trigger: 'none'
        },
        slices: {
            0: { color: colorPrimary },
            1: { color: colorSecondary }
        }
    };

    // chart
    // ---------------------------------------
    const pieChartTre = new google.visualization.PieChart( pieElementTre );

    // draw
    // ---------------------------------------
    pieChartTre.draw( pieDataTre, pieOptionsTre );

} // end drawChart function

function drawDonutQuattro() {

    // element
    // ---------------------------------------
    const pieElementQuattro = document.querySelector( '#pieChartQuattro' );
    const rawDataQuattro = [
        [ 'Technology', 'Skill' ],
        [ 'PhotoShop', 70 ],
        [ 'NoSkill', 30 ]
    ];

    // data
    // ---------------------------------------
    const pieDataQuattro = google.visualization.arrayToDataTable( rawDataQuattro );

    // options
    // ---------------------------------------
    const pieOptionsQuattro = {
        pieHole: pieHoleValue,
        legend: 'none',
        pieSliceText: 'none',
        pieSliceTextStyle: {
            color: 'black',
        },
        tooltip: {
            // trigger: 'none'
        },
        slices: {
            0: { color: colorPrimary },
            1: { color: colorSecondary }
        }
    };

    // chart
    // ---------------------------------------
    const pieChartQuattro = new google.visualization.PieChart( pieElementQuattro );

    // draw
    // ---------------------------------------
    pieChartQuattro.draw( pieDataQuattro, pieOptionsQuattro );

} // end drawChart function

// INCLUDE LIBRARY AND CALL FUNCTIONS
// ------------------------------------------------
google.charts.load( 'visualization', '1', { 'packages': ['corechart'] } );
google.charts.setOnLoadCallback( drawDonutUno );
google.charts.setOnLoadCallback( drawDonutDuo );
google.charts.setOnLoadCallback( drawDonutTre );
google.charts.setOnLoadCallback( drawDonutQuattro );

// RESPONSIVE DRAW FUNCTION
// ------------------------------------------------
window.addEventListener( 'resize', function () {
    drawDonutUno();
    drawDonutDuo();
    drawDonutTre();
    drawDonutQuattro();
});
