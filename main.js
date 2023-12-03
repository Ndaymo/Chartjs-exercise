
const canvasArea = document.getElementById("myChart").getContext("2d");
const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 350, 420, 370, 500, 375, 415, 420, 312, 600],
      label: "Croissants I ate",
      fill: true,
      backgroundColor: "red",
    },
  ],
};
const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
    },
};
 const myChartOne = new Chart(canvasArea, config);

