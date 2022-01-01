let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
        labels:['Pointe-à-Pitre', 'Basse-Terre', 'Baie-Mahault', 'Les Abymes', 'Deshaies', 'Saint-François'],
        datasets:[{
            label:'Population',
            data:[
                15410,
                20705,
                31691,
                53590,
                4097,
                12518
            ]
        }]
    },
    options:{}
    
});