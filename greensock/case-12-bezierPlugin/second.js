window.addEventListener( 'load', function () {
    // -----------------------------------------
    const boxUno = document.querySelector( '.source__box--uno' );
    const boxDuo = document.querySelector( '.source__box--duo' );
    const boxTre = document.querySelector( '.source__box--tre' );
    // -----------------------------------------
    const animaDuration = 2;
    const easignBack = Back.easeOut;
    const easingPower2 = Power2.easeOut;
    // -----------------------------------------
    const timelineBezier = new TimelineMax({ repeat: 2, yoyo: true });
    // before -----
    // const timeline = new TimelineMax({ repeat: 3, repeatDelay: 1, yoyo: true, delay: 2 });
    // timeline.staggerTo( [ boxUno, boxDuo, boxTre ], animaDuration, { x: 250, ease: easignBack }, 0.1 );
    // -----------------------------------------
    const pointsUno = [ { x: 0,   y: 0 }, { x: 100, y: -100 }, { x: 250, y: 0 } ];
    const pointsDuo = [ { x: 0,   y: 0 }, { x: 100, y: 60 }, { x: 250, y: 0 } ];
    const pointsTre = [ { x: 0,   y: 0 }, { x: 50, y: 50 }, { x: 120, y: 0 }, { x: 200, y: 50 }, { x: 250, y: 0 } ];
    // -----------------------------------------
    timelineBezier
        .to( boxUno, animaDuration, { bezier: { values: pointsUno }, ease: easingPower2, curviness: 1.4})
        .to( boxDuo, animaDuration, { bezier: { values: pointsDuo }, ease: easingPower2, curviness: 1.4})
        .to( boxTre, animaDuration, { bezier: { values: pointsTre }, ease: easingPower2, curviness: 1.4});
    // -----------------------------------------
}, false );
