// Directional Rotation Visualizer
// https://codepen.io/GreenSock/full/jiEyG/

// Fun with GSAP and 3D rotation
// http://codepen.io/MAW/full/gaaOGa/

window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const boxUno = document.querySelector( '#box-uno' );
    const boxies = document.querySelectorAll( '.box' );
    const boxWrapper = document.querySelector( '.box-wrapper' );
    const btnUno = document.querySelector( '#controls-uno' );
    const btnDuo = document.querySelector( '#controls-duo' );
    const btnTre = document.querySelector( '#controls-tre' );
    const btnQuattro = document.querySelector( '#controls-quattro' );
    const btnCinque = document.querySelector( '#controls-cinque' );
    // ----------------------------------------------------------
    function oldFushion() {
        TweenMax.to( boxUno, 4, {
            // rotation: 360
            rotation: -360,
            transformOrigin: 'center center'
        });
    }
    // -----------------------------------------------------------
    function clockWise() {
        TweenMax.to( boxUno, 4, {
            directionalRotation: '360_cw'
        });
    }
    // -----------------------------------------------------------
    function counterClockWise() {
        TweenMax.to( boxUno, 4, {
            directionalRotation: '360_ccw'
        });
    }
    // -----------------------------------------------------------
    function complexRotation() {
        TweenMax.to( boxUno, 4, {
            directionalRotation: {
                rotationX: '180_cw',
                rotationY: '180_ccw',
                useRadian: true
            }
        });
    }
    // -----------------------------------------------------------
    function randomRotation() {
        let flag = true;
        let randomAngle;
        let duration;
        boxies.forEach( function ( item ) {
            if ( flag ) {
                randomAngle = Math.floor( Math.random() * 720 ) + '_cw';
            } else {
                randomAngle = Math.floor( Math.random() * 720 ) + '_ccw';
            }
            duration = Math.floor( Math.random() * 10 );
            TweenMax.to( item, duration, {
                directionalRotation: randomAngle
            });
            flag = !flag;
        });
    }
    // -----------------------------------------------------------
    function revertRotation() {
        boxies.forEach( function ( item ) {
            TweenMax.to( item, 2, {
                directionalRotation: 0 + '_short',
                ease: Bounce.easeOut
            });
        });
    }
    // -----------------------------------------------------------
    btnUno.addEventListener( 'click', oldFushion, false );
    btnDuo.addEventListener( 'click', clockWise, false );
    btnTre.addEventListener( 'click', counterClockWise, false );
    btnQuattro.addEventListener( 'click', complexRotation, false );
    btnCinque.addEventListener( 'click', randomRotation, false );
    // -----------------------------------------------------------
    boxWrapper.addEventListener( 'mouseenter', randomRotation, false );
    boxWrapper.addEventListener( 'mouseleave', revertRotation, false );
}, false );
