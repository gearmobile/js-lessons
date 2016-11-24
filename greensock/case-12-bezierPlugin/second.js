// https://goo.gl/lRgeUU
// https://learn.javascript.ru/bezier
// https://greensock.com/docs/#/HTML5/GSAP/Plugins/BezierPlugin/

window.addEventListener( 'load', function () {

    // CONSTS
    // -----------------------------------------
    const boxUno = document.querySelector( '.source__box--uno' );
    const boxDuo = document.querySelector( '.source__box--duo' );
    const boxTre = document.querySelector( '.source__box--tre' );
    const btnUno = document.querySelector( '.button--uno' );
    const btnDuo = document.querySelector( '.button--duo' );
    const btnTre = document.querySelector( '.button--tre' );

    // SIMPLE ANIMATION
    // -----------------------------------------
    function simpleAnima() {
        const simpleAnimation = new TimelineMax({ yoyo: true, repeat: 4 });
        simpleAnimation.staggerTo( [ boxUno, boxDuo, boxTre ], 1, {
            x: 250,
            delay: 1,
            repeatDelay: 0.5,
            ease: Back.easeOut
        }, 0.1 );
    }

    // BEZIER ANIMATION
    // -----------------------------------------
    function bezierAnimationSimple() {
        const pointsUno = [
            { x: 0,   y: 0 },
            { x: 50,   y: -50 },
            { x: 100,   y: 50 },
            { x: 250, y: 0 }
        ];
        // -------------------------------------------------
        const tlBezierUno = new TimelineMax({ repeat: 2, yoyo: true });
        // -------------------------------------------------
        tlBezierUno.to( boxUno, 2, {
            bezier: {
                values: pointsUno
            },
            ease: Power2.easeOut
        });
    }

    // BEZIER ANIMATION COMPLEX
    // ----------------------------------------
    function bezierAnimationComplex() {
        // ---------------------------------------------------------------------
        const tlBezierComplex = new TimelineMax({ repeat: 2, yoyo: true });
        // ---------------------------------------------------------------------
        const pointsUno = [ { x: 0, y: 0 }, { x: 100, y: -100 }, { x: 250, y: 0 } ];
        const pointsDuo = [ { x: 0, y: 0 }, { x: 100, y: 60 }, { x: 250, y: 0 } ];
        const pointsTre = [ { x: 0, y: 0 }, { x: 50, y: 50 }, { x: 120, y: 0 }, { x: 200, y: 50 }, { x: 250, y: 0 } ];
        // ---------------------------------------------------------------------
        tlBezierComplex
            .to( boxUno, 2, { bezier: { values: pointsUno, curviness: 1.4 }, ease: Power2.easeOut } )
            .to( boxDuo, 2, { bezier: { values: pointsDuo, curviness: 1.4 }, ease: Power2.easeOut } )
            .to( boxTre, 2, { bezier: { values: pointsTre, curviness: 1.4 }, ease: Power2.easeOut } );
    }

    // BUTTONS EVENTS
    // -----------------------------------------------------------
    btnUno.addEventListener( 'click', simpleAnima, false );
    btnDuo.addEventListener( 'click', bezierAnimationSimple, false );
    btnTre.addEventListener( 'click', bezierAnimationComplex, false );

}, false );
