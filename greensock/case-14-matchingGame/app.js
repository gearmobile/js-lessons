// -----------------------------------------------
// https://greensock.com/
// https://codepen.io/collection/KiEhr/ - splitTextPlugin
// -----------------------------------------------
window.addEventListener( 'load', function () {

    // consts and variables
    // ----------------------------------------------------------
    const gameTitle = new SplitText( '.game-title' );
    const gameBoard = document.querySelector( '.game-board' );
    const borderWidth = parseInt( gameBoard.currentStyle || window.getComputedStyle( gameBoard, null ).borderWidth );
    const gameBoardTop = gameBoard.getBoundingClientRect().top + borderWidth;
    const gameBoardLeft = gameBoard.getBoundingClientRect().left + borderWidth;
    const charsNumber = gameTitle.chars.length;
    const imageItems = document.querySelectorAll( '.item' );
    const draggableIcons = document.querySelectorAll( '.draggable-item' );
    const targetItems = document.querySelectorAll( '.target-item' );
    let totalHits = 0;
    const gameContainer = document.querySelector( '.game-board' );
    const gameOver = document.querySelector( '.game-over' );
    const gameMiss = document.querySelector( '.game-miss' );
    const gameHit = document.querySelector( '.game-hit' );

    // timeline instances
    // ----------------------------------------------------------
    const tlSplitText = new TimelineMax({ onComplete: loadItemsBoard });

    // set icons initial properties
    // ----------------------------------------------------------
    TweenMax.set( imageItems, { scale: 0, opacity: 0 } );
    TweenMax.set( gameOver, { scale: 0 } );
    TweenMax.set( gameMiss, { scale: 0, autoAlpha: 0 } );
    TweenMax.set( gameHit, { scale: 0, autoAlpha: 0 } );


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

    // hide popup modal window
    // ----------------------------------------------------------
    function hidePopup() {
        TweenMax.to( gameMiss, 1.4, { scale: 0, autoAlpha: 0, ease: Back.easeIn, delay: 0.1 } );
    }

    // show popup modal window
    // ----------------------------------------------------------
    function showPopup() {
        TweenMax.to( gameMiss, 0.8, { scale: 1, autoAlpha: 1, ease: Back.easeOut, onComplete: hidePopup } );
    }

    // hide popup success
    // ----------------------------------------------------------
    function hidePopupSuccess() {
        TweenMax.to( gameHit, 0.8, { scale: 0, autoAlpha: 0, ease: Back.easeOut, onComplete: finishGame } )
    }

    // show popup success
    // ----------------------------------------------------------
    function showPopupSuccess() {
        TweenMax.to( gameHit, 0.8, { scale: 1, autoAlpha: 1, ease: Back.easeOut, onComplete: hidePopupSuccess } );
    }

    // finish game modal window
    // ----------------------------------------------------------
    function finishGame() {
        if ( totalHits === targetItems.length ) {
            TweenMax.to( gameOver, 2.8, { scale: 1, ease: Elastic.easeOut } );
        }
    }

    // hide matched elements
    // ----------------------------------------------------------
    function hideElements( dragItem, targetItem ) {
        totalHits++;
        TweenMax.to( [ dragItem.target, targetItem ], 0.6, { autoAlpha: 0, onComplete: showPopupSuccess } );
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
                this.offsetTop = this.startY - ( this.target.getBoundingClientRect().top - gameBoardTop );
                this.offsetLeft = this.startY - ( this.target.getBoundingClientRect().left - gameBoardLeft );
            },
            onDragEnd: function () {
                let targetID = this.target.id + '-drop';
                let dragItem = this;
                targetItems.forEach( function ( item ) {
                    let itemID = item.id;
                    if ( targetID === itemID ) {
                        if ( dragItem.hitTest( item, '50%' ) ) {
                            let itemPosition = item.getBoundingClientRect();
                            let diffTop = dragItem.offsetTop + ( itemPosition.top - gameBoardTop );
                            let diffLeft = dragItem.offsetLeft + ( itemPosition.left - gameBoardLeft );
                            TweenMax.to( dragItem.target, 1, {
                                x: diffLeft,
                                y: diffTop,
                                ease: Back.easeOut,
                                onComplete: hideElements,
                                onCompleteParams: [ dragItem, item ]
                            });
                        } else {
                            TweenMax.to( dragItem.target, 0.8, {
                                x: dragItem.startX,
                                y: dragItem.startY,
                                ease: Back.easeOut,
                                onComplete: showPopup
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
