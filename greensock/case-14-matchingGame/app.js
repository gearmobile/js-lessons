// -----------------------------------------------
// https://greensock.com/
// https://codepen.io/collection/KiEhr/ - splitTextPlugin
// -----------------------------------------------
window.addEventListener( 'load', function () {
    // split text plugin
    // ----------------------------------------------------------
    const gameTitle = new SplitText( '.game-title' );
    const tlSplitText = new TimelineLite();
    const charsNumber = gameTitle.chars.length;
    // ----------------------------------------------------------
    function titleSplit() {
        for ( let i = 0; i < charsNumber; i++ ) {
            tlSplitText.from( gameTitle.chars[i], 0.6, {
                force3D: true,
                opacity: 0,
                x: -500,
                transformOrigin: '0 50%',
                ease: Back.easeOut
            }, Math.random() )
        }
    }
    // ----------------------------------------------------------
    titleSplit();
    // ----------------------------------------------------------
    const totalScore = 6;
    let totalHits = 0;
    const gameContainer = document.querySelector( '.game-board' );
    // ----------------------------------------------------------
}, false );
