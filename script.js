google.charts.load('current',{packages: ['corechart']});
google.charts.setOnLoadCallback(drwwChart);

function drwwChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('string','Autores');
    data.addColumn('number','Preferência');
    data.addRows([
        ['Machado de Assis' ,10],
        ['Manoel de Barro'  ,15],
        ['Guimarães Rpsa'   ,20]
    ])

    var options = {
        title: 'Qual autor você prefere?',
        width: 600,
        heigth: 300
    }

    var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
    chart.draw(data,options)
}
