// -----------------------------------------------------------
// TIMELINE CONTROLS -----------------------------------------
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------------------------------
    const elementUno = document.querySelector( '#box-item-one' );
    const elementDuo = document.querySelector( '#box-item-two' );
    const elementTre = document.querySelector( '#box-item-three' );
    const elementQuattro = document.querySelector( '#box-item-four' );
    // ------------------------------------------------------------------
    const btnPlay = document.querySelector( '#play' );
    const btnPause = document.querySelector( '#pause' );
    const btnResume = document.querySelector( '#resume' );
    const btnReverse = document.querySelector( '#reverse' );
    const btnSpeedUp = document.querySelector( '#speedUp' );
    const btnSlowDown = document.querySelector( '#slowDown' );
    const btnSeek = document.querySelector( '#seek' );
    const btnGoTo = document.querySelector( '#goTo' );
    const btnRestart = document.querySelector( '#restart' );
    // ------------------------------------------------------------------
    const duration = 3;
    const xDistance = 800;
    const alpha = 0.3;
    let delayValue = 1;
    const easing = Power4.easeOut;
    // ------------------------------------------------------------------
    const tl = new TimelineLite();
    // ------------------------------------------------------------------
    // USING TWEENLINE
    // ------------------------------------------------------------------
    function playAnima() {
        tl.play();
    }
    function pauseAnima() {
        tl.pause();
    }
    function resumeAnima() {
        tl.resume();
    }
    function reverseAnima() {
        tl.reverse();
    }
    function speedUpAnima() {
        tl.timeScale(3);
    }
    function slowDownAnima() {
        tl.timeScale(0.5);
    }
    function seekAnima() {
        tl.seek(1);
    }
    function gotoAnima() {
        tl.progress(0.5);
    }
    function restartAnima() {
        tl.restart();
    }
    // ------------------------------------------------------------------
    tl.pause();
    // ------------------------------------------------------------------
    btnPlay.addEventListener( 'click', playAnima, false );
    btnPause.addEventListener( 'click', pauseAnima, false );
    btnResume.addEventListener( 'click', resumeAnima, false );
    btnReverse.addEventListener( 'click', reverseAnima, false );
    btnSpeedUp.addEventListener( 'click', speedUpAnima, false );
    btnSlowDown.addEventListener( 'click', slowDownAnima, false );
    btnSeek.addEventListener( 'click', seekAnima, false );
    btnGoTo.addEventListener( 'click', gotoAnima, false );
    btnRestart.addEventListener( 'click', restartAnima, false );
    // ------------------------------------------------------------------
    tl
        .to( elementUno, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .add( 'label' )
        .to( elementDuo, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .to( elementTre, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .to( elementQuattro, duration, { x: xDistance, autoAlpha: alpha, ease: easing } );
    // -------------------------------------------------------------------
}, false );
