//Restart
var restart = document.querySelector('#btn');
//Squares
var squares = document.querySelectorAll('td');

//clear
function clearBoard() {
  for (var i=0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener("click",clearBoard);

//Square
function changeMarker(){
  if (this.textContent ==="") {
    this.textContent ="X";
  }else if (this.textContent === "X") {
    this.textContent = "O";
  }else {
    this.textContent = "";
  }

}

for (var i= 0; i<squares.length; i++){
  squares[i].addEventListener("click",changeMarker)
}
