document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('have').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      calculate();
    }
  });

  document.getElementById('want').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      calculate();
    }
  });

  document.getElementById('worth').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      calculate();
    }
  });

  document.getElementById('submit').addEventListener('click', calculate);

});

function calculate() {
  var have = document.getElementById("have").value;
  var want = document.getElementById("want").value;
  var worth = document.getElementById("worth").value;
  var res = "";
  if(have.length) {
    if(want.length) {
      if(worth.length) {
        if(!isNaN(have) && !isNaN(want) && !isNaN(worth)) {
          have = Number(have) / 100;
          want = Number(want) / 100;
          worth = Number(worth) / 100;
          var need = ((want - have + (worth * have )) / worth) * 100;
          res = "You need to get " + need.toFixed(2) + "% on your final.";
        } else {
          res = "Please only enter numbers";
        }
      } else {
        res = "Please enter how much your final is worth";
      }
    } else {
      res = "Please enter what grade you want."
    }
  } else {
    res = "Please enter your current grade.";
  }
  document.getElementById("result").innerHTML = res;
}
