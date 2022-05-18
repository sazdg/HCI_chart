const myChart = document.getElementById('myChart').getContext('2d');

//var globali del grafico
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';


//grafico multi axis line chart 

const config = {
    type: 'line',
    data: {
        labels: ['lbl1', 'lbl2', 'lbl3'],
        datasets: [{
            label: 'Contagi',
            data: [10, 20, 40, 60, 100],
            borderWidth: 1,
            fill: false,
            borderColor: 'green',
        }, {
            label: 'Decessi',
            data: [49, 70, 20, 10, 23],
            borderWidth: 1,
            fill: false,
            borderColor: 'blue',
        }, {
            label: 'Guariti',
            data: [50, 100, 20, 40, 30],
            borderWidth: 1,
            fill: false,
            borderColor: 'red',
        }
        ]
    },
    options: {
        // title: {
        //     display: true,
        //     text: 'Casi covid-19 torino',
        //     fontSize: 12
        // },
        // legend: {
        //     display: true,
        //     position: top,
        //     labels: {
        //         fontColor: '#000'
        //     }
        // },
        layout:{
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
