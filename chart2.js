const myChart2 = document.getElementById('myChart2').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
const grafico2 = new Chart(myChart2, {
    type: 'line',
    data: {
        labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        datasets: [{
            label: '# of votes',
            data: [12, 19, 3, 5, 2, 5],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});