//Alert banner
const alert = document.getElementById('alert');

//If the user clicks the close button, then
//hide the alert banner
alert.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alert.style.display = 'none';
  }
});

// //Line Graph
const trafficCanvas = document.getElementById("traffic-chart").getContext('2d');

//object literal representing the data for the traffic chart
let trafficData = {
  labels: ['16-22', "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

//set the animation duration to zero to make chart more responsive
let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
}

//Create the chart itself
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});


//Bar graph
const dailyCanvas = document.getElementById("daily-chart");

//data for daily traffic bar chart
const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'F', 'S'],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
}

//Create the chart itself
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});



//Doughnut Chart
const mobileCanvas = document.getElementById('mobile-chart');

//Data for mobile users Chart
const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    labels: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

//Create the chart itself
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


//Messaging Section
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// send.addEventListener('click', ()=> {
//   alert("This button works.");
// });
//
function messages () {
  if (user.value === "" && message.value === "") {
      window.alert('Please fill out user and message fields before sending');
    } else if (user.value === "") {
      window.alert('Please fill out user field before sending');
    } else if (message.vaule = "") {
      window.alert('Please fill out message field before sending');
    } else {
      window.alert(`Message successfully sent to: ${user.value}`);
    }
}

// type="button" onclick="messages()"

send.addEventListener('click', ()=> {
  //ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
      window.alert('Please fill out user and message fields before sending');
    } else if (user.value === "") {
      window.alert('Please fill out user field before sending');
    } else if (message.vaule = "") {
      window.alert('Please fill out message field before sending');
    } else {
      window.alert(`Message successfully sent to: ${user.value}`);
    }
});
