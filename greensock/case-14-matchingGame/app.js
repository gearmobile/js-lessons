// -----------------------------------------------
// https://greensock.com/
// https://codepen.io/collection/KiEhr/ - splitTextPlugin
// -----------------------------------------------
window.addEventListener( 'load', function () {

    // consts and variables
    // ----------------------------------------------------------
    const gameTitle = new SplitText( '.game-title' );
    const gameBoard = document.querySelector( '.game-board' );
    let gameBoardTop = gameBoard.getBoundingClientRect().top + 1;
    let gameBoardLeft = gameBoard.getBoundingClientRect().left + 1;
    const charsNumber = gameTitle.chars.length;
    const imageItems = document.querySelectorAll( '.item' );
    const draggableIcons = document.querySelectorAll( '.draggable-item' );
    const targetItems = document.querySelectorAll( '.target-item' );
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
                let position = $( this.target ).position();
                let targetDimentions = this.target.getBoundingClientRect();
                console.log( position.top + ' : ' + position.left );
                console.log( ( this.startY - position.top ) + ' : ' + ( this.startX - position.left ) );
                // console.log( ( targetDimentions.top - ( gameBoardDimentions.top + 1 ) ) + ' : ' + ( targetDimentions.left - ( gameBoardDimentions.left + 1 ) ) );
                // console.log( targetDimentions.width + ' : ' + targetDimentions.height );
                // console.log( gameBoard );
            },
            onDragEnd: function () {
                let targetID = this.target.id + '-drop';
                let dragItem = this;
                targetItems.forEach( function ( item ) {
                    let itemID = item.id;
                    if ( targetID === itemID ) {
                        if ( dragItem.hitTest( item, '50%' ) ) {
                            dragItem.y = item.getBoundingClientRect().top - gameBoardTop;
                            dragItem.x = item.getBoundingClientRect().left - gameBoardLeft;
                        } else {
                            TweenMax.to( dragItem.target, 0.8, {
                                x: dragItem.startX,
                                y: dragItem.startY,
                                ease: Back.easeOut
                            });
                        }
                    }
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
