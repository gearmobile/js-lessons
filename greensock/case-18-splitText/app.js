// --------------------------------------------------------------
// http://codepen.io/collection/KiEhr/
// http://codepen.io/GreenSock/pen/gFHza - sample
// --------------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const startButton = document.querySelector( '.run' );
    const block = document.querySelector( '.text' );
    // ----------------------------------------------------------
    const text = new SplitText( block, {
        type: 'lines, words, chars',
        // position: 'absolute'
    });
    const textChars = text.chars;
    const textWords = text.words;
    const textLines = text.lines;
    // ----------------------------------------------------------
    TweenLite.set( block, { perspective: 400 } );
    // ----------------------------------------------------------
    function animaCharsUno() {
        TweenMax.staggerFrom( textChars, 0.5, { opacity: 0, rotation: -180, ease: Back.easeOut }, 0.02 );
    }
    // ----------------------------------------------------------
    function animaCharsDuo() {
        TweenMax.staggerFrom( textChars, 0.5, { opacity: 0, y: -100, ease: Back.easeOut }, 0.02 );
    }
    // ----------------------------------------------------------
    function callBack() {
        text.revert();
    }
    // ----------------------------------------------------------
    function animaCharsTre() {
        TweenMax.staggerFrom( textChars, 0.8, {
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: '0% 50% -50%',
            ease: Back.easeOut
        }, 0.01, callBack );
    }
    // ----------------------------------------------------------
    function animaCharsQuattro() {
        TweenMax.staggerFrom( textChars, 0.8, {
            scale: 4,
            autoAlpha: 0,
            rotationX: -180,
            transformOrigin: '100% 50%',
            ease: Back.easeOut
        }, 0.04 );
    }
    // ----------------------------------------------------------
    function animaCharsCinque() {
        TweenMax.staggerFrom( textLines, 0.6, {
            opacity: 0,
            rotationX: -120,
            transformOrigin: 'top center -150',
            force3D: true
        }, 0.1 );
    }
    // ----------------------------------------------------------
    startButton.addEventListener( 'click', animaCharsCinque, false );
}, false );




















