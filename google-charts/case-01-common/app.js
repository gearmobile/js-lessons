

function drawChart() {

    const plot = document.getElementById( 'chart_div' );

    // CREATE THE DATA TABLES
    const data = new google.visualization.DataTable();
    data.addColumn( 'string', 'Topping' );
    data.addColumn( 'number', 'Slices' );
    data.addRows([
        [ 'Mushrooms', 3 ],
        [ 'Onions', 1 ],
        [ 'Olives', 1 ],
        [ 'Zucchini', 1 ],
        [ 'Pepperoni', 2 ]
    ]);

    // SET CHART OPTIONS
    const options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': plot.clientWidth,
        'height': plot.clientHeight
    };

    // INSTANTIATE AND DRAW OUR CHART, PASSING IN SOME OPTIONS
    const chart = new google.visualization.PieChart( plot );
    chart.draw( data, options );
}

google.charts.load( 'current', { 'packages':[ 'corechart' ] } );
google.charts.setOnLoadCallback( drawChart );
