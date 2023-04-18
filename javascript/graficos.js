// Variables para el gráfico 1
const chart1Labels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const chart1Data = [45, 53, 62, 70, 82, 94, 107, 121, 135, 150];

// Variables para el gráfico 2
const chart2Labels = ['Perros', 'Gatos', 'Pájaros', 'Peces', 'Otros'];
const chart2Data = [67, 22, 7, 3, 1];
const chart2Colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

// Variables para el gráfico 3
const chart3Labels = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú'];
const chart3Data = [27, 37, 18, 8, 41, 21];

// Configuración del gráfico 1
const chart1Config = {
  type: 'line',
  data: {
    labels: chart1Labels,
    datasets: [{
      label: 'Población de mascotas en América Latina',
      data: chart1Data,
      fill: false,
      borderColor: '#4CAF50',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Configuración del gráfico 2
const chart2Config = {
  type: 'pie',
  data: {
    labels: chart2Labels,
    datasets: [{
      data: chart2Data,
      backgroundColor: chart2Colors
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
};

// Configuración del gráfico 3
const chart3Config = {
  type: 'bar',
  data: {
    labels: chart3Labels,
    datasets: [{
      label: 'Población de mascotas por país',
      data: chart3Data,
      backgroundColor: '#FF6384'
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
};

// Función para renderizar los gráficos
function renderCharts() {
  const chart1Canvas = document.getElementById('chart1');
  const chart2Canvas = document.getElementById('chart2');
  const chart3Canvas = document.getElementById('chart3');
  
  // Renderización de los gráficos
  const chart1 = new Chart(chart1Canvas, chart1Config);
  const chart2 = new Chart(chart2Canvas, chart2Config);
  const chart3 = new Chart(chart3Canvas, chart3Config);
}

renderCharts();
