// ------------------------------------------------------
const d3 = require( 'd3' );
// ------------------------------------------------------

// -----------------------------------------------------
const margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
};

// raw data
// -----------------------------------------------------
const urlData1 = '../data1.csv';
const urlData2 = '../data2.csv';
const urlData3 = '../data3.csv';
const urlData4 = '../data4.csv';

// ------------------------------------------------------
const colorPrimary = 'cornflowerblue';
const colorSecondary = 'cornsilk';
const width = 300;
const height = width;
const plotWidth = width - margins.left - margins.right;
const plotHeight = height - margins.top - margins.bottom;
const plotRadius = plotWidth / 2;
const colors = d3.scaleOrdinal( [ colorPrimary, colorSecondary ] );
// -------------------------------------------------------

// ARC GENERATOR
// -------------------------------------------------------
let arc = d3.arc()
    .outerRadius( plotRadius - 10 )
    .innerRadius( plotRadius - 60 );

// PIE GENERATOR
// -------------------------------------------------------
let pie = d3.pie()
    .sort( null )
    .value( function ( d ) {
        return d.value;
    });

// PIE TWEEN FUNCTION
// -------------------------------------------------------
function pieTween( b ) {
    b.innerRadius = 0;
    let i = d3.interpolate( { startAngle: 0, endAngle: 0 }, b );
    return function ( t ) {
        return arc( i( t ) );
    };
}

// function pieUno ---------------------------------------------
// -------------------------------------------------------
function pieUno() {

    // svg define
    // -------------------------------------------------------
    let plot1 = d3.select( '.doughnut-chart > .doughnut-chart__item--primo' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', plotWidth )
        .attr( 'height', plotHeight );

    // plot group define
    // -------------------------------------------------------
    let plot1Group = plot1.append( 'g' )
        .classed( 'plot-group', true )
        .attr( 'transform', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' );

    // get data from csv-file
    d3.csv( urlData1, function ( error, rawData ) {

        // error check
        // ----------------------------------------------------
        if ( error ) {
            throw error;
        }

        // parse data
        // -------------------------------------------------------
        let data1 = rawData.map( function ( d ) {
            return {
                skill: d.technology,
                value: +d.value
            };
        });

        // get first value of the object
        // -------------------------------------------------------
        let data1FirstValue = data1[0].value;

        // generate arcs
        // -------------------------------------------------------
        let arcs1 = plot1Group.selectAll( '.plot-arc' )
            .data( pie( data1 ) )
            .enter()
            .append( 'g' )
            .classed( 'plot-arc', true );

        // append paths to the arcs
        // -------------------------------------------------------
        arcs1.append( 'path' )
            .attr( 'd', arc )
            .style( 'fill', function ( d ) {
                return colors( d.data.skill );
            })
            .transition()
            .ease( d3.easeLinear )
            .duration( 2000 )
            .attrTween( 'd', pieTween );

        // append the text
        // -------------------------------------------------------
        let text1 = plot1Group
            .append( 'text' )
            .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
            .attr( 'dy', '.35em' )
            .text( function () {
                return data1FirstValue + '%';
            });
    });
} // end function pieUno

// function pieDuo ---------------------------------------------
// -------------------------------------------------------
function pieDuo() {

    // svg define
    // -------------------------------------------------------
    let plot2 = d3.select( '.doughnut-chart > .doughnut-chart__item--secondo' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', plotWidth )
        .attr( 'height', plotHeight );

    // plot group define
    // -------------------------------------------------------
    let plot2Group = plot2.append( 'g' )
        .classed( 'plot-group', true )
        .attr( 'transform', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' );

    // get data from csv-file
    d3.csv( urlData2, function ( error, rawData ) {

        // error check
        // ----------------------------------------------------
        if ( error ) {
            throw error;
        }

        // parse data
        // -------------------------------------------------------
        let data2 = rawData.map( function ( d ) {
            return {
                skill: d.technology,
                value: +d.value
            };
        });

        // get first value of the object
        // -------------------------------------------------------
        let data2FirstValue = data2[0].value;

        // generate arcs
        // -------------------------------------------------------
        let arcs2 = plot2Group.selectAll( '.plot-arc' )
            .data( pie( data2 ) )
            .enter()
            .append( 'g' )
            .classed( 'plot-arc', true );

        // append paths to the arcs
        // -------------------------------------------------------
        arcs2.append( 'path' )
            .attr( 'd', arc )
            .style( 'fill', function ( d ) {
                return colors( d.data.skill );
            })
            .transition()
            .ease( d3.easeLinear )
            .duration( 2000 )
            .attrTween( 'd', pieTween );

        // append the text
        // -------------------------------------------------------
        let text2 = plot2Group
            .append( 'text' )
            .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
            .attr( 'dy', '.35em' )
            .text( function () {
                return data2FirstValue + '%';
            });
    });
} // end function pieDuo

// function pieTre ---------------------------------------------
// -------------------------------------------------------
function pieTre() {

    // svg define
    // -------------------------------------------------------
    let plot3 = d3.select( '.doughnut-chart > .doughnut-chart__item--tetro' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', plotWidth )
        .attr( 'height', plotHeight );

    // plot group define
    // -------------------------------------------------------
    let plot3Group = plot3.append( 'g' )
        .classed( 'plot-group', true )
        .attr( 'transform', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' );

    // get data from csv-file
    d3.csv( urlData3, function ( error, rawData ) {

        // error check
        // ----------------------------------------------------
        if ( error ) {
            throw error;
        }

        // parse data
        // -------------------------------------------------------
        let data3 = rawData.map( function ( d ) {
            return {
                skill: d.technology,
                value: +d.value
            };
        });

        // get first value of the object
        // -------------------------------------------------------
        let data3FirstValue = data3[0].value;

        // generate arcs
        // -------------------------------------------------------
        let arcs3 = plot3Group.selectAll( '.plot-arc' )
            .data( pie( data3 ) )
            .enter()
            .append( 'g' )
            .classed( 'plot-arc', true );

        // append paths to the arcs
        // -------------------------------------------------------
        arcs3.append( 'path' )
            .attr( 'd', arc )
            .style( 'fill', function ( d ) {
                return colors( d.data.skill );
            })
            .transition()
            .ease( d3.easeLinear )
            .duration( 2000 )
            .attrTween( 'd', pieTween );

        // append the text
        // -------------------------------------------------------
        let text3 = plot3Group
            .append( 'text' )
            .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
            .attr( 'dy', '.35em' )
            .text( function () {
                return data3FirstValue + '%';
            });
    });
} // end function pieTre

// function pieQuattro ---------------------------------------------
// -------------------------------------------------------
function pieQuattro() {

    // svg define
    // -------------------------------------------------------
    let plot4 = d3.select( '.doughnut-chart > .doughnut-chart__item--quattro' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', plotWidth )
        .attr( 'height', plotHeight );

    // plot group define
    // -------------------------------------------------------
    let plot4Group = plot4.append( 'g' )
        .classed( 'plot-group', true )
        .attr( 'transform', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' );

    // get data from csv-file
    d3.csv( urlData4, function ( error, rawData ) {

        // error check
        // ----------------------------------------------------
        if ( error ) {
            throw error;
        }

        // parse data
        // -------------------------------------------------------
        let data4 = rawData.map( function ( d ) {
            return {
                skill: d.technology,
                value: +d.value
            };
        });

        // get first value of the object
        // -------------------------------------------------------
        let data4FirstValue = data4[0].value;

        // generate arcs
        // -------------------------------------------------------
        let arcs4 = plot4Group.selectAll( '.plot-arc' )
            .data( pie( data4 ) )
            .enter()
            .append( 'g' )
            .classed( 'plot-arc', true );

        // append paths to the arcs
        // -------------------------------------------------------
        arcs4.append( 'path' )
            .attr( 'd', arc )
            .style( 'fill', function ( d ) {
                return colors( d.data.skill );
            })
            .transition()
            .ease( d3.easeLinear )
            .duration( 2000 )
            .attrTween( 'd', pieTween );

        // append the text
        // -------------------------------------------------------
        let text4 = plot4Group
            .append( 'text' )
            .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
            .attr( 'dy', '.35em' )
            .text( function () {
                return data4FirstValue + '%';
            });
    });
} // end function pieQuattro

window.addEventListener( 'load', function () {

    pieUno();
    pieDuo();
    pieTre();
    pieQuattro();

}, false );
