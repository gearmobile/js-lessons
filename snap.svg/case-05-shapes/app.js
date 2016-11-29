
window.addEventListener( 'load', function () {

    // ORIGINAL OBJECT
    // -------------------------------------
    const snapObject = Snap( 1000, 400 );

    // RECTANGLE OBJECT
    // -------------------------------------
    const base = snapObject.rect( 50, 50, 200, 100 );
    const roof = snapObject.polygon( 25,50, 275,50, 150,15 );
    const group = snapObject.group( base, roof );

    const window  = snapObject.rect( 75,75, 50,50 );

    const baseOptions = {
        fill: '#e9967a'
    };

    const roofOptions = {
        fill: '#1e90ff'
    };

    const houseOptions = {
        fill: '#c71585',
        stroke: '#48d1cc'
    };

    // base.attr( baseOptions );
    // roof.attr( roofOptions );

    group.attr( houseOptions );

    group.add( window );

}, false );
