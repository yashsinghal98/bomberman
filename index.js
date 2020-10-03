let bombarr = [];
let gamestart = true;
let countcorrect = 0;
for (let i = 0; i < 7; i++) {
  let num = Math.floor(Math.random() * 81);
  if (bombarr.indexOf(num) !== -1) {
    i--;
  } else {
    bombarr.push(num);
  }
}
function check(str) {
  if (gamestart === false) return;
  str = +str;
  console.log(str);
  if (bombarr.indexOf(str) === -1) {
    if(document.getElementById(str).style.getPropertyValue("background-color")!=="green")
    {
    countcorrect++;
    document.getElementById(`${str}`).style.backgroundColor = "green";
    document.getElementById("gamescore").innerHTML = `Score:${countcorrect}`;
    if (countcorrect === 74) {
      alert("Congrats!!You have won the game");
    }
  }
  } else {
    for (let i = 0; i < 7; i++) {
      str = bombarr[i];
      str = str.toString();
      console.log(str);
      document.getElementById(str).innerHTML= "☠";
      document.getElementById(str).style.backgroundColor="red";
    }
    setTimeout(function(){
    alert(`Your Score is:${countcorrect}`)},500);
    gamestart = false;
  }
}
function build() {
  let name1 = document.getElementById("name");
  if (name1.value === "") return;
  else {
    let temp = document.getElementById("startname");
    temp.remove();
    document.getElementById("playername").innerHTML = `Name:${name1.value}`;
  }
  let ele = document.createElement("div");
  ele.setAttribute("id", "table");
  ele.setAttribute("class", "table");
  for (let i = 0; i < 9; i++) {
    let rowele = document.createElement("div");
    rowele.setAttribute("id", "row");
    rowele.setAttribute("class", "row");
    for (let j = 0; j <= 9; j++) {
      let newele = document.createElement("div");
      let idval=i*10+j;
      newele.setAttribute("id", `${idval}`);
      newele.setAttribute("class", "cell");
      newele.addEventListener("click", function () {
        check(`${idval}`);
      });
      rowele.appendChild(newele);
    }
    ele.appendChild(rowele);
  }
  document.body.appendChild(ele);
}
function Reset()
{
  location.reload();
}