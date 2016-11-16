window.addEventListener( 'load', function () {
    // -----------------------------------------
    const boxUno = document.querySelector( '.source__box--uno' );
    const boxDuo = document.querySelector( '.source__box--duo' );
    const boxTre = document.querySelector( '.source__box--tre' );
    const animaDuration = 2;
    const easign = Back.easeOut;
    const timeline = new TimelineMax({ repeat: 3, repeatDelay: 1, yoyo: true, delay: 2 });
    // -----------------------------------------
    timeline.staggerTo( [ boxUno, boxDuo, boxTre ], animaDuration, { x: 250, ease: easign }, 0.1 );
}, false );
