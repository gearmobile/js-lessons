window.addEventListener( 'load', function () {
    //
    // SET WIDTH AND HEIGHT of
    const WIDTH_PLOT = 600;
    const HEIGHT_PLOT = 400;
    const BAR_HEIGHT = 30;
    const BAR_SPACING_TOP = 1;
    const BAR_SPACING_BOTTOM = BAR_SPACING_TOP;
    //
    // SET MIN AND MAX VALUES
    const RANDOM_MIN = 10;
    const RANDOM_MAX = 500;
    //
    // SET FUNCTION RETURNS RANDOM VALUE FROM RANGE RANDOM_MIN - RANDOM_MAX
    function iRand( minValue, maxValue ) {
        return Math.floor( Math.random() * ( maxValue - minValue + 1 ) + minValue );
    }
    //
    // SET ARRAY
    const BAR_QUANTITY = 10;
    let dataSet = [];
    for ( let i = 0; i < BAR_QUANTITY; i++ ) {
        dataSet.push( iRand( RANDOM_MIN, RANDOM_MAX ) );
    }
    //
    // SET PLOT
    let plot = d3.select( 'body' )
        .append( 'svg' )
        .classed( 'plot', true )
        .attr( 'width', WIDTH_PLOT )
        .attr( 'height', HEIGHT_PLOT );
    //
    // SET PLOT BARS
    plot.selectAll( 'rect' )
        .data( dataSet )
        .enter()
        .append( 'rect' )
        .classed( 'plot-bar', true )
        .attr( 'width', function ( d ) {
            return d;
        })
        .attr( 'height', ( BAR_HEIGHT - BAR_SPACING_TOP - BAR_SPACING_BOTTOM ) )
        .attr( 'x', 0 )
        .attr( 'y', function ( d, i ) {
            return i * BAR_HEIGHT;
        });
}, false );
