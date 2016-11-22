window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const box = document.querySelector( '.box' );
    const btnRun = document.querySelector( '.run' );
    const btnReload = document.querySelector( '.reload' );
    // ----------------------------------------------------------
    TweenMax.set( box, {
        rotation: '45deg',
        transformOrigin: 'center center'
    });
    // ----------------------------------------------------------
    function fnReload() {
        window.location.reload();
    }
    // ----------------------------------------------------------
    function simpleRotation() {
        TweenMax.to( box, 1, {
            rotation: '360deg'
        });
    }
    // ----------------------------------------------------------
    function directionalRotationClockwise() {
        TweenMax.to( box, 1, {
            rotation: '360_ccw'
        });
    }
    // ----------------------------------------------------------
    function directionalRotationCounterClockwise() {
        TweenMax.to( box, 1, {
            rotation: '360_short'
        });
    }
    // ----------------------------------------------------------
    // btnRun.addEventListener( 'click', simpleRotation, false );
    btnRun.addEventListener( 'click', directionalRotationCounterClockwise, false );
    btnReload.addEventListener( 'click', fnReload, false );
    // ----------------------------------------------------------
}, false );
