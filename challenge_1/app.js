var boxes = document.getElementsByClassName('box');
var counter = 1;

var winningOutcomes = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];

var checker = function() {
  var xs = [];
  var os = [];

  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === 'X') {
      xs.push(i + 1);
    } else if (boxes[i].innerHTML === 'O') {
      os.push(i + 1);
    }
  }

  for (var j = 0; j < winningOutcomes.length; j++) {
    var xmarks = 0;
    var omarks = 0;
    for (var k = 0; k < 3; k++) {
      if (xs.includes(winningOutcomes[j][k])) {
        xmarks++;
      }

      if (os.includes(winningOutcomes[j][k])) {
        omarks++;
      }
    }

    if (xmarks === 3) {
      for (var m = 0; m < boxes.length; m++) {
        boxes[m].removeEventListener('click', addEvent);
      }
      return alert('x wins');
    } else if (omarks === 3) {
      for (var m = 0; m < boxes.length; m++) {
        boxes[m].removeEventListener('click', addEvent);
      }
      return alert('o wins');
    }
  }

  if (counter === 10) {
    return alert('tie. play again');
  }
}

var addEvent = function() {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (counter % 2 !== 0) {
      this.innerHTML = 'X';
    } else {
      this.innerHTML = 'O';
    }
    counter++;
    checker();
  }
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', addEvent);
};

document.getElementsByTagName('button')[0].addEventListener('click', function() {
  document.location.reload();
});