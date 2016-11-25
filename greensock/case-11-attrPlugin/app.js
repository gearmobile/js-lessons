window.addEventListener( 'load', function () {

    // CONST
    // ----------------------------------------------------------
    const star = document.querySelector( '#star' );
    const rect = document.querySelector( '#rect' );
    const btnFirst = document.querySelector( '#first' );
    const btnSecond = document.querySelector( '#second' );

    // function rotation
    // ----------------------------------------------------------
    function fnRotation() {
        TweenMax.to( star, 6, {
            rotation: 360,
            transformOrigin: 'center center',
            repeat: 1,
            ease: Linear.easeNone
        });
    }

    // POINTS
    // ----------------------------------------------------------
    const pointsUno = '37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50';
    const pointsDuo = '75,25 75,25 100,50 75,75 75,75 50,100 25,75 25,75 0,50 25,25 25,25 50,0';
    const pointsTre = '77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50 0,22.4, 22.4,0, 50,0';


    // FUNCTION MORPH RECTANGLE
    // ----------------------------------------------------------
    function fnRectangleMorph() {
        // --------------------------
        const rectMorph = new TimelineMax({
            repeat: -1,
            yoyo: true
        });
        // ---------------------------
        rectMorph
            // STEP ONE
            // -------------------------------
            .to( rect, 2, {
                attr: {
                    points: pointsUno,
                    fill: 'hsl( -=300, +=94%, 48% )'
                },
                ease: Back.easeInOut
            })
            // STEP TWO
            // -------------------------------
            .to( rect, 2, {
                attr: {
                    points: pointsDuo,
                    fill: 'hsl( +=180, +=95%, 49% )'
                },
                ease: Back.easeInOut
            })
            // STEP THREE
            // -------------------------------
            .to( rect, 2, {
                attr: {
                    points: pointsTre,
                    fill: 'hsl( -=90, +=95%, 49% )'
                },
                ease: Back.easeInOut
            });
    }

    // BUTTON EVENTS
    // ----------------------------------------------------------
    btnFirst.addEventListener( 'click', fnRotation, false );
    btnSecond.addEventListener( 'click', fnRectangleMorph, false );

}, false );
