/**
 * Created by Alexandre on 27/06/2016.
 */
var chart;
var nbTotalvisitor = $('.total-visitor').text();
var nbReturningVisitor = $('.returning-visitor').text();
var chartData = [
    {
        "name":"",
        "visits":0,
        "color":"#F8F8F8"
    },
    {
        "name": "Visiteurs Total",
        "visits": nbTotalvisitor,
        "color": "#00cc00"
    },
    {
        "name": "Visiteurs récurrents",
        "visits": nbReturningVisitor,
        "color": "#50E3CE"
    }
];


AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "name";
    chart.startDuration = 1;
    chart.depth3D = 50;
    chart.angle = 30;
    chart.marginRight = 100;
    chart.paddingRight= 100;

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0;
    categoryAxis.axisAlpha = 0;
    categoryAxis.gridPosition = "start";

    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisAlpha = 0;
    valueAxis.gridAlpha = 0;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.colorField = "color";
    graph.balloonText = "<b>[[category]]: [[value]]</b>";
    graph.type = "column";
    graph.lineAlpha = 0.5;
    graph.lineColor = "color";
    graph.topRadius = 1;
    graph.fillAlphas = 0.9;
    chart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    chartCursor.valueLineEnabled = true;
    chartCursor.valueLineBalloonEnabled = true;
    chartCursor.valueLineAlpha = 1;
    chart.addChartCursor(chartCursor);

    //chart.creditsPosition = "";

    // WRITE
    chart.write("chartdiv");

});

// PARTIE MAPS

var map = AmCharts.makeChart("mapdiv", {
    type: "map",



    balloon: {
        color: "#000000"
    },

    dataProvider: {
        map: "franceLow",
        getAreasFromMap: false
    },

    areasSettings: {
        autoZoom: false,
        selectedColor: "#CC0000"
    },

    smallMap: {}
});