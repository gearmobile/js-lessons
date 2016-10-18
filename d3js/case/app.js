window.addEventListener( 'load', function () {
    //
    // SET WIDTH AND HEIGHT OF PLOT
    const WIDTH_PLOT = 600;
    const HEIGHT_PLOT = 400;
    const BAR_HEIGHT = 30;
    //
    // SET PADDING AND HEIGHT OF BARS
    // const BAR_SPACING_TOP = 1;
    // const BAR_HEIGHT_ACTUAL = BAR_HEIGHT - BAR_SPACING_TOP;
    //
    // SET MIN AND MAX VALUES
    const RANDOM_MIN = 10;
    const RANDOM_MAX = 800;
    //
    // SET FUNCTION RETURNS RANDOM VALUE FROM RANGE RANDOM_MIN - RANDOM_MAX
    function iRand( minValue, maxValue ) {
        return Math.floor( Math.random() * ( maxValue - minValue + 1 ) + minValue );
    }
    //
    // SET ARRAY
    const BAR_QUANTITY = 20;
    let dataSet = [];
    for ( let i = 0; i < BAR_QUANTITY; i++ ) {
        dataSet.push( iRand( RANDOM_MIN, RANDOM_MAX ) );
    }
    // let dataSet_MIN = d3.min( dataSet );
    let dataSet_MAX = d3.max( dataSet );
    // ----------------------------------------------------------------
    let xScale = d3.scaleLinear()
        .domain([ 0, dataSet_MAX ])
        .range([ 0, WIDTH_PLOT ]);
    //
    let yScale = d3.scaleBand()
        .domain( d3.range( 0, dataSet.length ) )
        .range([ 0, HEIGHT_PLOT ])
        .padding( 0.1 );
    //
    let colors = d3.scaleOrdinal( d3.schemeCategory20b );
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
            return xScale( d );
        })
        .attr( 'height', yScale.bandwidth() )
        .attr( 'x', 0 )
        .attr( 'y', function ( d, i ) {
            return yScale(i);
        })
        .attr( 'fill', function ( d, i ) {
            return colors( i );
        });
}, false );
