// Gráfico 1: Mascotas en Latinoamérica

const petData = {
  labels: ['Perros', 'Gatos'],
  datasets: [{
    label: 'Cantidad de hogares con mascotas',
    data: [0.595, 0.245],
    backgroundColor: [
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 99, 132, 0.8)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1
  }]
};

const petConfig = {
  type: 'pie',
  data: petData,
};

let petChart = new Chart(
  document.getElementById('pet-chart'),
  petConfig
);


// Gráfico 2: Dueños de mascotas y tiempo dedicado

const timeData = {
  labels: ['Menos de 1 hora', 'Entre 1 y 2 horas', 'Entre 2 y 4 horas', 'Más de 4 horas'],
  datasets: [{
    label: 'Cantidad de dueños de mascotas',
    data: [0.2, 0.35, 0.3, 0.15],
    backgroundColor: 'rgba(75, 192, 192, 0.8)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

const timeConfig = {
  type: 'bar',
  data: timeData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.1
        }
      }
    }
  }
};

let timeChart = new Chart(
  document.getElementById('time-chart'),
  timeConfig
);


// Gráfico 3: Población de mascotas en América Latina

const populationData = {
  labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
  datasets: [{
    label: 'Cantidad de mascotas',
    data: [100, 120, 140, 160, 190, 220, 250, 280, 310, 340],
    fill: false,
    borderColor: 'rgba(255, 159, 64, 1)',
    tension: 0.1
  }]
};

const populationConfig = {
  type: 'line',
  data: populationData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50
        }
      }
    }
  }
};

let populationChart = new Chart(
  document.getElementById('population-chart'),
  populationConfig
);
