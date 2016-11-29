
window.addEventListener( 'load', function () {

    // ORIGINAL OBJECT
    // -------------------------------------
    const snapObject = Snap( 1000, 400 );

    // RECTANGLE OBJECT
    // -------------------------------------
    const base = snapObject.rect( 50, 50, 200, 100 );
    const roof = snapObject.polygon( 25,50, 275,50, 150,15 );
    const window  = snapObject.rect( 75,75, 50,50 );
    const group = snapObject.group( base, roof );

    const houseOptions = {
        fill: '#c71585',
        stroke: '#48d1cc'
    };

    group.attr( houseOptions );

    group.add( window );

    group.transform( 's0.8,0,0' );

}, false );
