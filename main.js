let myChart = document.getElementById("myChart").getContext("2d");

let massPopChart = new Chart(myChart, {
  type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [
      "Pointe-à-Pitre",
      "Basse-Terre",
      "Baie-Mahault",
      "Les Abymes",
      "Deshaies",
      "Saint-François"
    ],
    datasets: [
      {
        label: "Population",
        data: [15410, 20705, 31691, 53590, 4097, 12518],
        //backgroundColor:'green'
        backgroundColor: [
          "rgba(32, 220, 65, 0.8)",
          "rgba(100, 16, 207, 1)",
          "rgba(150, 212, 241, 1)",
          "rgba(170, 50, 45, 1)",
          "rgba(251, 92, 171, 1)",
          "rgba(56, 131, 46, 1)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWith: 3,
        hoverBorderColor: "000",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Villes de Guadeloupe",
        fontSize:25
      }
    }
   
  }
});

// Global Options

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "777";
