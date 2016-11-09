// ------------------------------------------
const gsap = require( 'gsap' );
// ------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    const Timeline = gsap.TimelineLite;
    const Back = gsap.Back;
    const tlMain = new Timeline({ paused: true });
    // ---------------------------------------------------
    const btnPlay = document.querySelector( '#button-play' );
    const btnReverse = document.querySelector( '#button-reverse' );
    // ---------------------------------------------------
    const box = document.querySelector( '.box' );
    const boxHTML = document.querySelector( '.box__html' );
    const boxSVG = document.querySelector( '.box__svg' );
    const boxHTMLDOT = document.querySelector( '.box__html > span' );
    const boxSVGDOT = document.querySelector( '.box__svg > circle' );
    // ---------------------------------------------------
    const duration = 1;
    // ---------------------------------------------------
    function animaPlay() {
        tlMain.play();
    }
    // ---------------------------------------------------
    function animaReverse() {
        tlMain.reverse();
    }
    // --------------------------------------------------
    tlMain
        .to( boxHTML, duration, { x: '100%', y: '100%', ease: Back.easeOut } )
        .to( boxSVG, duration, { x: '100%', y: '100%', ease: Back.easeOut } );
    // ---------------------------------------------------
    btnPlay.addEventListener( 'click', animaPlay, false );
    btnReverse.addEventListener( 'click', animaReverse, false );
    // ---------------------------------------------------
}, false );
