const myChart = document.getElementById('myChart').getContext('2d')

//var globali del grafico
Chart.defaults.global.defaultFontFamily = 'Arial'
Chart.defaults.global.defaultFontSize = 18
Chart.defaults.global.defaultFontColor = '#777'

//https://thewebdev.info/2020/04/28/chart-js-creating-a-chart-with-multiple-lines/
//la foto con il cane 

//https://stackoverflow.com/questions/19187085/what-is-the-easiest-way-to-convert-an-excel-spreadsheet-with-tabular-data-to-jso
//CONVERT CSV TO JSON


//grafico multi axis line chart 
//https://stackabuse.com/guide-to-creating-charts-in-javascript-with-chartjs/ 

const config = {
    type: 'line',
    data: {
        labels: ['lbl1', 'lbl2', 'lbl3', 'lbl4', 'lbl5'],//giorni
        datasets: [
        {
            label: 'Contagi',
            data: [10, 20, 40, 60, 100], //data1,
            borderWidth: 1,
            fill: false,
            borderColor: 'green',
        }, {
            label: 'Decessi',
            data: [49, 70, 20, 10, 23], //data2,
            borderWidth: 1,
            fill: false,
            borderColor: 'blue',
        }, {
            label: 'Guariti',
            data: [50, 100, 20, 40, 30], //data3,
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
}

var chart = new Chart(myChart, config)

function loadMarzo(){
    console.log("loaded Marzo")
}

//default
function loadAprile() {
    console.log("loaded Aprile")
}

//https://www.chartjs.org/docs/latest/developers/updates.html 
function addData(chart, label, data){
    chart.data.labels.push(label)
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data)
    })
    chart.update()
}

function removeData(chart) {
    chart.data.labels.pop()
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop()
    })
    chart.update()
}