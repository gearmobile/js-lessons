
window.addEventListener( 'load', function () {

    // ORIGINAL OBJECT
    // -------------------------------------
    const snapObject = Snap( 1200, 400 );

    // ELLIPSE
    // -------------------------------------
    const ellipse = snapObject.ellipse( 200, 100, 100, 60 );

    // ROUNDED RECTANGLE
    // -------------------------------------
    const rounded = snapObject.rect( 400, 50, 200, 200, 10, 30 );

    // SIMPLE LINE
    // ---------------------------------------
    const simpleLine = snapObject.line( 0, 0, 300, 300 );
    simpleLine.attr({
        stroke: '#f00',
        strokeWidth: 2
    });

    // POLYGON
    // ------------------------------------------
    const polygon = snapObject.polyline( 700,50, 800,100, 800,200, 900,150, 800,300, 700,50  );
    polygon.attr({
        fill: 'rgba( 244, 120, 30, 0.8 )'
    })
}, false );
