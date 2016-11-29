window.addEventListener( 'load', function () {

    // consts
    // ------------------------------------------
    const pieHoleValue = 0.76;
    const colorPrimary = 'cyan';
    const colorSecondary = 'lightgrey';

    // VALUES
    // ------------------------------------------
    const JS_VALUE = 76;
    const HTML_VALUE = 98;
    const CSS_VALUE = 94;
    const PHOTOSHOP_VALUE = 66;

    function drawDonutUno() {

        // element
        // ---------------------------------------
        const pieElementUno = document.querySelector( '#pieChartUno' );
        const rawDataUno = [
            [ 'Technology', 'Skill' ],
            [ 'JavaScript', JS_VALUE ],
            [ 'NoSkill', 100 - JS_VALUE ]
        ];

        // add value
        // --------------------------------------
        const value = document.createElement( 'div' );
        value.classList.add( 'piechart-value' );
        value.innerHTML = rawDataUno[1][1] + '%';
        document.querySelector( '#diagrammItemUno' ).appendChild( value );


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

    } // end drawDonutUno function

    function drawDonutDuo() {

        // element
        // ---------------------------------------
        const pieElementDuo = document.querySelector( '#pieChartDuo' );
        const rawDataDuo = [
            [ 'Technology', 'Skill' ],
            [ 'HTML', HTML_VALUE ],
            [ 'NoSkill', 100 - HTML_VALUE ]
        ];

        // add value
        // --------------------------------------
        const value = document.createElement( 'div' );
        value.classList.add( 'piechart-value' );
        value.innerHTML = rawDataDuo[1][1] + '%';
        document.querySelector( '#diagrammItemDuo' ).appendChild( value );

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

    } // end drawDonutDuo function

    function drawDonutTre() {

        // element
        // ---------------------------------------
        const pieElementTre = document.querySelector( '#pieChartTre' );
        const rawDataTre = [
            [ 'Technology', 'Skill' ],
            [ 'CSS', CSS_VALUE ],
            [ 'NoSkill', 100 - CSS_VALUE ]
        ];

        // add value
        // --------------------------------------
        const value = document.createElement( 'div' );
        value.classList.add( 'piechart-value' );
        value.innerHTML = rawDataTre[1][1] + '%';
        document.querySelector( '#diagrammItemTre' ).appendChild( value );

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

    } // end drawDonutTre function

    function drawDonutQuattro() {

        // element
        // ---------------------------------------
        const pieElementQuattro = document.querySelector( '#pieChartQuattro' );
        const rawDataQuattro = [
            [ 'Technology', 'Skill' ],
            [ 'Photoshop', PHOTOSHOP_VALUE ],
            [ 'NoSkill', 100 - PHOTOSHOP_VALUE ]
        ];

        // add value
        // --------------------------------------
        const value = document.createElement( 'div' );
        value.classList.add( 'piechart-value' );
        value.innerHTML = rawDataQuattro[1][1] + '%';
        document.querySelector( '#diagrammItemQuattro' ).appendChild( value );

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

    } // end drawDonutQuattro function

// INCLUDE LIBRARY AND CALL FUNCTIONS
// ------------------------------------------------
    google.charts.load( 'current', { 'packages': ['corechart'] } );
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

}, false);
