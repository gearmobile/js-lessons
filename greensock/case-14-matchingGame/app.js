// -----------------------------------------------
// https://greensock.com/
// https://codepen.io/collection/KiEhr/ - splitTextPlugin
// -----------------------------------------------
window.addEventListener( 'load', function () {

    // consts and variables
    // ----------------------------------------------------------
    const gameTitle = new SplitText( '.game-title' );
    const charsNumber = gameTitle.chars.length;
    const imageItems = document.querySelectorAll( '.item' );
    const draggableIcons = document.querySelectorAll( '.draggable-item' );
    const totalScore = 6;
    let totalHits = 0;
    const gameContainer = document.querySelector( '.game-board' );

    // timeline instances
    // ----------------------------------------------------------
    const tlSplitText = new TimelineMax({ onComplete: loadItemsBoard });

    // set icons initial properties
    // ----------------------------------------------------------
    TweenMax.set( imageItems, { scale: 0, opacity: 0 } );

    // split text plugin
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

    // make icons board draggable
    // ----------------------------------------------------------
    function initDraggableItems() {
        Draggable.create( draggableIcons, {
            type: 'x, y',
            bounds: gameContainer,
            edgeResistance: 0.7,
            throwProps: true,
            onPress: function () {
                this.startX = this.x;
                this.startY = this.y;
            },
            onDragEnd: function () {
                TweenMax.to( this.target, 0.8, {
                    x: this.startX,
                    y: this.startY,
                    ease: Back.easeOut
                });
            }
        });
    }

    // load board icons
    // ----------------------------------------------------------
    function loadItemsBoard() {
        const tlItemsBoard = new TimelineMax({ onComplete: initDraggableItems });
        tlItemsBoard.staggerTo( imageItems, 0.2, {
            opacity: 1,
            scale: 1,
            force3D: true,
            ease: Back.easeOut
        }, 0.1 );
    }

    // ----------------------------------------------------------
    titleSplit();

    // ----------------------------------------------------------
}, false );
