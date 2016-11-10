// ------------------------------------------------------
const d3 = require( 'd3' );
// ------------------------------------------------------
const plotWidth = 600;
const plotHeight = plotWidth;
const dataSets = [
    { label: 'skill', value: 80 },
    { label: 'noskill', value: 20 }
];
// ------------------------------------------------------
const value = dataSets[0].value;
const outerRadius = 300;
const innerRadius = 200;
const colors = d3.scaleOrdinal( [ 'red', 'blue' ] );
// ------------------------------------------------------
window.addEventListener( 'load', function () {
    // --------------------------------------------------
    let plot = d3.select( '.doughnut-chart' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', plotWidth )
        .attr( 'height', plotHeight );
    // --------------------------------------------------
    let plotGroup = plot.append( 'g' )
        .classed( 'plot-group', true )
        .attr( 'transform', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' );
    // --------------------------------------------------
    let arc = d3.arc()
        .innerRadius( innerRadius )
        .outerRadius( outerRadius );
    // --------------------------------------------------
    let pie = d3.pie()
        .value( function ( d ) {
            return d.value;
        });
    // --------------------------------------------------
    let arcs = plotGroup.selectAll( '.plot-arc' )
        .data( pie( dataSets ) )
        .enter()
        .append( 'g' )
        .classed( 'plot-arc', true );
    // --------------------------------------------------
    arcs.append( 'path' )
        .attr( 'd', arc )
        .attr( 'fill', function ( d ) {
            return colors( d.value );
        });
    // --------------------------------------------------
    let text = plotGroup.selectAll( 'text' )
        .data( pie( dataSets ) )
        .enter()
        .append( 'text' )
        .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
        .attr( 'text-anchor', 'middle' )
        .attr( 'font-size', '40px' )
        .attr( 'dy', '.35em' )
        .text( function ( d ) {
            return value + '%';
        });
}, false );
