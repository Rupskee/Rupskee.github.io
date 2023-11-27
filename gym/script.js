var benchmax;
var squatmax;
var deadliftmax;
var rowmax;
var exercisemap;

const order = ["chest", "rest", "leg", "shoulder", "back", "arm", "rest"];
const exercise = [
  "bench",
  "rest",
  "squat - deadlift",
  "bench",
  "barbell row",
  "bench",
  "rest",
];
const weight = [0.75, 0.8, 0.875, 0.925, 1];
const reps = [10, 8, 5, 3, 1];

function getDag(dag, week) {
  dag -= 1;
  week -= 1;
  if (order[dag] == "leg") {
    return [
      order[dag],
      "squat",
      Math.floor((weight[week] * squatmax) / 2.5) * 2.5,
      reps[week],
      "deadlift",
      Math.floor((weight[week] * deadliftmax) / 2.5) * 2.5,
      reps[week],
    ];
  } else {
    return [
      order[dag],
      exercise[dag],
      Math.floor((weight[week] * exercisemap[exercise[dag]]) / 2.5) * 2.5,
      reps[week],
    ];
  }
}

function update() {
  benchmax = document.getElementById("bench").value;
  squatmax = document.getElementById("squat").value;
  deadliftmax = document.getElementById("deadlift").value;
  rowmax = document.getElementById("rows").value;
  exercisemap = {
    bench: benchmax,
    "squat - deadlift": [squatmax, deadliftmax],
    "barbell row": rowmax,
  };
}

function toString(dag) {
  if (dag[0] != "leg" && dag[0] != "rest") {
    return (
      dag[0] +
      " day // " +
      dag[1] +
      ": <span>" +
      dag[2] +
      "</span> x <span>" +
      dag[3] +
      "</span>"
    );
  } else if (dag[0] == "leg") {
    return (
      dag[0] +
      " day // " +
      dag[1] +
      ": <span>" +
      dag[2] +
      "</span> x <span>" +
      dag[3] +
      "</span> // " +
      dag[4] +
      ": <span>" +
      dag[5] +
      "</span> x <span>" +
      dag[6] +
      "</span>"
    );
  } else {
    return "REST";
  }
}

function setWeek(week) {
  document.getElementById("d1").innerHTML = toString(getDag(1, week));
  document.getElementById("d2").innerHTML = toString(getDag(2, week));
  document.getElementById("d3").innerHTML = toString(getDag(3, week));
  document.getElementById("d4").innerHTML = toString(getDag(4, week));
  document.getElementById("d5").innerHTML = toString(getDag(5, week));
  document.getElementById("d6").innerHTML = toString(getDag(6, week));
  document.getElementById("d7").innerHTML = toString(getDag(7, week));
}
