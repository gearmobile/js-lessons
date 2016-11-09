// ------------------------------------------
const gsap = require( 'gsap' );
// ------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    const Timeline = gsap.TimelineLite;
    const Back = gsap.Back;
    const Elastic = gsap.Elastic;
    const Power2 = gsap.Power2;
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
    const duration1 = 4;
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
        .to( boxSVG, duration, { x: '100%', y: '100%', ease: Back.easeOut } )
        .addPause()
        .to( boxHTML, duration1, { left: '50%', top: '50%', ease: Elastic.easeOut } )
        .to( boxSVG, duration1, { left: '50%', top: '50%', ease: Elastic.easeOut } )
        .addPause()
        .to( boxHTML, duration, { left: '50%', top: '50%', x: '-50%', ease: Power2.easeOut } )
        .to( boxHTMLDOT, duration, { left: 0, top: 0, backgroundColor: '#dc143c', width: 60, height: 60, ease: Power2.easeOut } )
        .addPause();
    // ---------------------------------------------------
    btnPlay.addEventListener( 'click', animaPlay, false );
    btnReverse.addEventListener( 'click', animaReverse, false );
    // ---------------------------------------------------
}, false );























