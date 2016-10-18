window.addEventListener( 'load', function () {
    //
    // SET WIDTH AND HEIGHT OF PLOT
    const WIDTH_PLOT = 600;
    const HEIGHT_PLOT = 400;
    const BAR_HEIGHT = 30;
    //
    // SET PADDING AND HEIGHT OF BARS
    const BAR_SPACING_TOP = 1;
    const BAR_SPACING_BOTTOM = BAR_SPACING_TOP;
    const BAR_HEIGHT_ACTUAL = BAR_HEIGHT - BAR_SPACING_TOP - BAR_SPACING_BOTTOM;
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
    let maxValue = d3.max( dataSet );
    let minValue = d3.min( dataSet );
    // ----------------------------------------------------------------
    // https://www.dashingd3js.com/d3js-scales - picture of scale
    // SET xScale
    // d3.scale.linear() - d3.v3
    // d3.scaleLinear() - d3.v4
    // ----------------------------------------------------------------
    let xScale = d3.scaleLinear()
        .domain([ minValue, maxValue ])
        .range([ 0, WIDTH_PLOT ]);
    //
    // set yScale
    let yScale = d3.scaleLinear()
        .domain([ 0, dataSet.length ])
        .range([ 0, HEIGHT_PLOT ], 0.02, 0);
    console.log( yScale( 20 ) );
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
        .attr( 'height', BAR_HEIGHT_ACTUAL )
        .attr( 'x', 0 )
        .attr( 'y', function ( d, i ) {
            return i * BAR_HEIGHT ;
        });
}, false );
