var ctx = document.getElementById("chartCanvas");
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    ],
  },
};

var myChart = new Chart(ctx, {
  type: "bar",
  options: options,
  data: {
    labels: [20, " ", 25, " ", 30, " ", 35, " ", 40, " ", 60, " ", 65],
    datasets: [
      {
        label: "Employer: K 73,500",
        backgroundColor: "rgb(2, 2, 118)",
        barThickness: 15,
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        stack: "Stack 1",
      },
      {
        label: "Employee: 52,500",
        backgroundColor: "rgb(66, 66, 178)",
        barThickness: 15,
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        stack: "Stack 1",
      },
      {
        label: "Total Interest: K 244,313",
        backgroundColor: "rgb(95, 172, 213)",
        barThickness: 15,
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        stack: "Stack 1",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
});

var ctx = document.getElementById("chartCanvas2");
const options2 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    ],
  },
};

var myChart2 = new Chart(ctx, {
  type: "bar",
  options: options,
  data: {
    labels: [20, 25, 30, 35, 40, 60],
    datasets: [
      {
        label: "Employer: K 73,500",
        backgroundColor: "rgb(2, 2, 118)",
        barThickness: 15,
        data: [20, 40, 60, 80, 100, 120],
        stack: "Stack 1",
      },
      {
        label: "Employee: 52,500",
        backgroundColor: "rgb(66, 66, 178)",
        barThickness: 15,
        data: [20, 40, 60, 80, 100, 120],
        stack: "Stack 1",
      },
      {
        label: "Total Interest: K 244,313",
        backgroundColor: "rgb(95, 172, 213)",
        barThickness: 15,
        data: [20, 40, 60, 80, 100, 120],
        stack: "Stack 1",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
});

var data3 = {
  labels: ["Dark", "Light"],
  datasets: [
    {
      data: [78, 22],
      backgroundColor: ["#3DED97", "#E7F9E4"],
      hoverBackgroundColor: ["#3DED97", "#E7F9E4"],
    },
  ],
};

var opt3 = {
  cutout: "75%",
  responsive: true,
  maintainAspectRatio: true,
  borderWidth: 1,
  plugins: {
    legend: false,
    doughnutlabel: {
      labels: [
        {
          text: "78%",
          font: {
            size: "15",
            weight: "bold",
          },
          color: "#000000",
        },
      ],
    },
  },
};

var ctx = document.getElementById("doughnutChart").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data3,
  options: opt3,
});

var data2 = {
  labels: ["Dark", "Light"],
  datasets: [
    {
      data: [95, 5],
      backgroundColor: ["#3DED97", "#E7F9E4"],
      hoverBackgroundColor: ["#3DED97", "#E7F9E4"],
    },
  ],
};

var opt2 = {
  cutout: "75%",
  responsive: true,
  maintainAspectRatio: true,
  borderWidth: 1,
  plugins: {
    legend: false,
    doughnutlabel: {
      labels: [
        {
          text: "78%",
          font: {
            size: "15",
            weight: "bold",
          },
          color: "#000000",
        },
      ],
    },
  },
};

var ctx = document.getElementById("doughnutChart2").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data2,
  options: opt2,
});

var data4 = {
  labels: ["Dark", "Light"],
  datasets: [
    {
      data: [59, 41],
      backgroundColor: ["#3DED97", "#E7F9E4"],
      hoverBackgroundColor: ["#3DED97", "#E7F9E4"],
    },
  ],
};

var opt3 = {
  cutout: "75%",
  responsive: true,
  maintainAspectRatio: true,
  borderWidth: 1,
  plugins: {
    legend: false,
    doughnutlabel: {
      labels: [
        {
          text: "78%",
          font: {
            size: "15",
            weight: "bold",
          },
          color: "#000000",
        },
      ],
    },
  },
};

var ctx = document.getElementById("doughnutChart3").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data4,
  options: opt3,
});

const inputSlider = document.querySelector(".slider");
const lengthDisplay = document.querySelector(".lengthInput");
let passwordLength = 10;
handleSlider();

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerHTML = passwordLength + "%";
}
// apply the event listeners when slider moves the number will change
inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

const inputSlider2 = document.querySelector(".slider2");
const lengthDisplay2 = document.querySelector(".lengthInput2");
let passwordLength2 = 65;
handleSlider2();

// function for handle the slider
function handleSlider2() {
  inputSlider2.value = passwordLength2;
  lengthDisplay2.innerHTML = passwordLength2;
}
inputSlider2.addEventListener("input", (e) => {
  passwordLength2 = e.target.value;
  handleSlider2();
});
