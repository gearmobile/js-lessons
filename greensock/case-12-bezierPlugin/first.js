window.addEventListener( 'load', function () {

    // CONSTS
    // ----------------------------------------------------------
    const plane = document.querySelector( '#plane' );
    const btnPlane = document.querySelector( '.bzBtn' );

    // POINTS
    // ----------------------------------------------------------
    const points = [
        { left: 300, top: 25 },
        { left: 550, top: 300 },
        { left: 300, top: 550 },
        { left: 25,  top: 300 },
        { left: 300, top: 25 }
    ];

    // SET INITIAL
    // ----------------------------------------------------------
    TweenMax.set( plane, { rotation: 45 } );

    // START PLANE
    // ----------------------------------------------------------
    function startPlane() {
        TweenMax.to( plane, 6, {
            bezier: {
                values: points,
                autoRotate: 45,
                type: 'thru',
                curviness: 1.4
            },
            ease: Linear.easeNone
        });
    }

    // BUTTON EVENT
    // ----------------------------------------------------------
    btnPlane.addEventListener( 'click', startPlane, false );

}, false );
