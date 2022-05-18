//var globali del grafico
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

var labels, data, data1, data2;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        labels = myObj.Cuba.map(function(e) {
            return e.date;
        });
        data = myObj.Cuba.map(function(e) {
            return e.confirmed;
        });
        data1 = myObj.Cuba.map(function(e) {
            return e.deaths;
        });
        data2 = myObj.Cuba.map(function(e) {
            return e.recovered;
        });
        console.log(myObj);
    
    var myChart = document.getElementById("myChart2").getContext('2d');

    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Positivi',
                    data: data,
                    borderWidth: 1,
                    fill: false,
                    borderColor: 'red'
                }, {
                    label: 'Decessi',
                    data: data1,
                    borderWidth: 1,
                    fill: false,
                    borderColor: 'blue'
                }, {
                    label: "Ricoverati",
                    data: data2,
                    borderWidth: 1,
                    fill: false,
                    borderColor: 'green'
                }]
        },
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            }
        }

    };

    var chart = new Chart(myChart, config);

    }
};


xmlhttp.open("GET", "https://pomber.github.io/covid19/timeseries.json", true);
xmlhttp.send();

