window.addEventListener( 'DOMContentLoaded', function () {

    // width, height, paddings ------------------------------------------
    const width = 600;
    const height = 500;
    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    const widthPlot = width - margins.left - margins.right;
    const heightPlot = height - margins.top - margins.bottom;

    // set plot ---------------------------------------------------------
    let plot = d3.select( 'body' ).append( 'svg' )
        .attr( 'class', 'plot' )
        .attr( 'width', widthPlot + margins.left + margins.right )
        .attr( 'height', heightPlot + margins.top + margins.bottom );
}, false);