const Chart = require( 'chart.js' );

window.addEventListener( 'load', function () {
    // -------------------------------------------
    let bubblePlot = document.querySelector( '#bubble' );
    // -------------------------------------------
    const bubbleData = {
        datasets: [
            {
                label: 'Bubble Chart',
                data: [
                    {
                        x: 30,
                        y: 50,
                        r: 10
                    },
                    {
                        x: 120,
                        y: 170,
                        r: 24
                    },
                    {
                        x: 70,
                        y: 20,
                        r: 12
                    },
                    {
                        x: 180,
                        y: 60,
                        r: 16
                    },
                    {
                        x: 100,
                        y: 80,
                        r: 30
                    },
                    {
                        x: 50,
                        y: 140,
                        r: 20
                    },
                    {
                        x: 150,
                        y: 110,
                        r: 22
                    }
                ],
                backgroundColor: 'salmon',
                borderColor: 'firebrick',
                borderWidth: 3,
                hoverBackgroundColor: 'lightgreen',
                hoverBorderColor: 'forestgreen',
                hoverBorderWidth: 4,
                hoverRadius: 6
            }
        ]
    };
    // ------------------------------------------
    const bubbleOptions = {
        //
    };
    // ------------------------------------------
    const bubbleOptions = {};
    // -------------------------------------------
    const bubble = new Chart( bubblePlot, {
        type: 'bubble',
        data: bubbleData
    });
}, false );
