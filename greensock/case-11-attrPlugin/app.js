
// CONST
// ----------------------------------------------------------
const star = document.querySelector( '#star' );
const rect = document.querySelector( '#rect' );
const btnFirst = document.querySelector( '#first' );
const btnSecond = document.querySelector( '#second' );
// ----------------------------------------------------------
const morphDuration = 2;
const morphEasing = Back.easeInOut;

// FUNCTION ROTATION
// ----------------------------------------------------------
function fnRotation() {
    TweenMax.to( star, 6, {
        rotation: 360,
        transformOrigin: 'center center',
        repeat: 1,
        ease: Elastic.easeOut
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
        .to( rect, morphDuration, {
            attr: {
                points: pointsUno,
                fill: 'hsl( -=300, +=94%, 48% )'
            },
            ease: morphEasing
        })
        // STEP TWO
        // -------------------------------
        .to( rect, morphDuration, {
            attr: {
                points: pointsDuo,
                fill: 'hsl( +=180, +=95%, 49% )'
            },
            ease: morphEasing
        })
        // STEP THREE
        // -------------------------------
        .to( rect, morphDuration, {
            attr: {
                points: pointsTre,
                fill: 'hsl( -=90, +=95%, 49% )'
            },
            ease: morphEasing
        });
}

// BUTTON EVENTS
// ----------------------------------------------------------
window.requestAnimationFrame( function () {
    btnFirst.addEventListener( 'click', fnRotation, false );
    btnSecond.addEventListener( 'click', fnRectangleMorph, false );
});




