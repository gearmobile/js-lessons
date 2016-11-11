// ------------------------------------------------------
const d3 = require( 'd3' );
// ------------------------------------------------------
const plotWidth = 600;
const plotHeight = plotWidth;
const dataSets = [
    { label: 'html', value: 80 },
    { label: 'none', value: 20 }
];
// ------------------------------------------------------
const object = dataSets[0];
console.log( object );
const outerRadius = 300;
const innerRadius = 200;
const colors = d3.scaleOrdinal( [ 'red', 'blue' ] );
// ------------------------------------------------------
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
    function pieTween( b ) {
        b.innerRadius = 0;
        let i = d3.interpolate( { startAngle: 0, endAngle: 0 }, b );
        return function ( t ) {
            return arc( i( t ) );
        };
    }
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
        })
        .transition()
        .ease( d3.easeLinear )
        .duration( 2000 )
        .attrTween( 'd', pieTween );
    // --------------------------------------------------
    let text = plotGroup.selectAll( 'text' )
        .data( pie( object ) )
        .enter()
        .append( 'text' )
        .attr( 'translate', 'translate(' + plotWidth / 2 + ',' + plotHeight / 2 + ')' )
        .attr( 'dy', '.35em' )
        .text( function ( d ) {
            return object.value + '%';
        });
}, false );
