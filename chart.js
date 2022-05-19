//var globali del grafico
Chart.defaults.global.defaultFontFamily = 'Arial'
Chart.defaults.global.defaultFontSize = 18
Chart.defaults.global.defaultFontColor = '#777'

const myChart = document.getElementById('myChart').getContext('2d')
var labelsMar = ["01/03/2022", "02/03/2022", "03/03/2022", "04/03/2022", "05/03/2022", "06/03/2022", "07/03/2022", "08/03/2022", "09/03/2022", "10/03/2022", "11/03/2022", "12/03/2022", "13/03/2022", "14/03/2022", "15/03/2022", "16/03/2022", "17/03/2022", "18/03/2022", "19/03/2022", "20/03/2022", "21/03/2022", "22/03/2022", "23/03/2022", "24/03/2022", "25/03/2022", "26/03/2022", "27/03/2022", "28/03/2022", "29/03/2022", "30/03/2022", "31/03/2022"];

console.log(labelsMar)
var tamponiMar = [35078, 30273, 27935, 34304, 32029, 16151, 23309, 33335, 26924, 31503, 30678, 27796, 15872, 24543, 33851, 29442, 33754, 33784, 32273, 17359, 28037, 36416, 28957, 32308, 36358, 31660, 16025, 25837, 35121, 29408, 33160];
var decessiMar = [17, 19, 7, 2, 4, 4, 9, 8, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 8];
var positiviMar = [2099, 1961, 1787, 1794, 1719, 1108, 1537, 2330, 5307, 5319, 5329, 5339, 5346, 5356, 5371, 5385, 5400, 5413, 5427, 5435, 5446, 5463, 5478, 5493, 5507, 5521, 5529, 5540, 5559, 5575, 3255];

var labelsApr = ["01/04/2022", "02/04/2022", "03/04/2022", "04/04/2022", "05/04/2022", "06/04/2022", "07/04/2022", "08/04/2022", "09/04/2022", "10/04/2022", "11/04/2022", "12/04/2022", "13/04/2022", "14/04/2022", "15/04/2022", "16/04/2022", "17/04/2022", "18/04/2022", "19/04/2022", "20/04/2022", "21/04/2022", "22/04/2022", "23/04/2022", "24/04/2022", "25/04/2022", "26/04/2022", "27/04/2022", "28/04/2022", "29/04/2022", "30/04/2022"];
var positiviApr = [3109, 2665, 1724, 2566, 3895, 3368, 3330, 3252, 3020, 1758, 2832, 4064, 3680, 3803, 3359, 3518, 2086, 826, 3579, 5279, 2720, 5710, 3951, 2769, 1084, 1642, 5973, 3718, 3402, 3023];
var decessiApr = [3, 5, 1, 2, 8, 5, 3, 9, 8, 3, 2, 4, 6, 2, 4, 2, 0, 0, 3, 1, 3, 6, 1, 4, 0, 3, 7, 3, 6, 6];
var tamponiApr = [32836, 33999, 18108, 26675, 32258, 27799, 28944, 31850, 32755, 17208, 26765, 32015, 27751, 30970, 30244, 31804, 16436, 10367, 25166, 35046, 20391, 35521, 39928, 21253, 11623, 14747, 42105, 29978, 30279, 37212];

const config = {
    type: 'line',
    data: {
        labels: labelsApr,
        datasets: [
            {
            label: 'Positivi',
            data: positiviApr,
            borderWidth: 1,
            fill: false,
            borderColor: '#1abe67'
        },{
            label: 'Decessi',
            data: decessiApr,
            borderWidth: 1,
            fill: false,
            borderColor: '#c41340'
        },{
            label: 'Tamponi',
            data: tamponiApr,
            borderWidth: 1,
            fill: false,
            borderColor: '#5f4bff'
        }
    ]
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
}

var chart = new Chart(myChart, config)

function loadMarzo() {

    var labelsTotal = labelsMar.concat(labelsApr)
    var positiviTotal = positiviMar.concat(positiviApr)
    var decessiTotal = decessiMar.concat(decessiApr)
    var tamponiTotal = tamponiMar.concat(tamponiApr)
    const configMarzo = {
        type: 'line',
        data: {
            labels: labelsTotal,
            datasets: [
                {
                    label: 'Positivi',
                    data: positiviTotal,
                    borderWidth: 1,
                    fill: false,
                    borderColor: '#1abe67'
                }, {
                    label: 'Decessi',
                    data: decessiTotal,
                    borderWidth: 1,
                    fill: false,
                    borderColor: '#c41340'
                }, {
                    label: 'Tamponi',
                    data: tamponiTotal,
                    borderWidth: 1,
                    fill: false,
                    borderColor: '#5f4bff'
                }
            ]
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
    }
    chart = new Chart(myChart, configMarzo)
    $("#btn-on").attr("id", "btn-off")
    $("#btn-off").attr("id", "btn-on")
}

//default
function loadAprile() {
    chart = new Chart(myChart, config)
    $("#btn-off").attr("id", "btn-on")
    $("#btn-on").attr("id", "btn-off")
}
