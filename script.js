var title = document.getElementById("title");
var ship = document.getElementById("ship");
var suit = document.getElementById("suit");
var bag = document.getElementById("bag");
var goings = document.getElementById("going");
var blast = document.getElementById("off");
var next = 0;
var ending = document.getElementById("ending");
var email = document.getElementById("email");

/*vars for packing the suitcase */
var sc = document.getElementById("case");
var drag1 = document.getElementById("drag1");
var drag2 = document.getElementById("drag2");
var drag3 = document.getElementById("drag3");
var drag4 = document.getElementById("drag4");
var drag5 = document.getElementById("drag5");
var drag6 = document.getElementById("drag6");
var drag7 = document.getElementById("drag7");
var done = document.getElementById("done");
var pack = 0;
var phase = 0;

//vars for choosing destination
var moon = document.getElementById("moon");
var mars = document.getElementById("mars");
var jupiter = document.getElementById("jupiter");

//all of the stuff for the info box
var info = document.getElementById("info");
var choice = document.getElementById("choice");
var text = document.getElementById("text");

//vars for the blast off page
var gege = document.getElementById("gege");
var go = 0;
var shipc1 = document.getElementById("shipc");
var suitc1 = document.getElementById("suitc");
var shipc = 0;
var suitc = 0;

window.onload = function () {
  title.innerHTML = "Choose Your Ship";
  info.style.display = "none";
  info.style.border = "none";
  suit.style.display = "none";
  bag.style.display = "none";
  going.style.display = "none";
  blast.style.display = "none";
  gege.style.display = "none";
  ending.style.display = "none";
  done.disabled = true;
};
/*funcions for choosing the ship */
function one() {
  ship.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the classic ship!!";
  text.innerHTML =
    "This is a segmented spaceship!! As you fly higher in space, this spaceship breaks apart. When it breaks apart, it'll help you get to space faster.";
  shipc += 1;
}
function two() {
  ship.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the space shuttle!";
  text.innerHTML =
    "This ship is attached to a rocket that shoots up and sends you into space!! This shuttle is also reusable!!";
  shipc += 2;
}
function three() {
  ship.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the alien ship!";
  text.innerHTML =
    "No one knows what these ships can do, its up to your imagination to decide what this ship does!";
  shipc += 3;
}

/*function for the next button */
function nexter() {
  next += 1;
  console.log(next);
  if (next == 1) {
    info.style.display = "none";
    ship.style.display = "none";
    suit.style.display = "flex";
    title.style.opacity = 1;
    title.innerHTML = "Choose Your Suit";
  } else if (next == 2) {
    suit.style.display = "none";
    title.style.opacity = 1;
    title.innerHTML = "Pack your bag!";
    choice.innerHTML = "Time to Pack!";
    text.innerHTML =
      "When packing your bag for space you need food and toiletries! Lets start with food! Drag and drop the food into the suitcase!";
    sc.src = "emtsc.png";
  } else if (next == 3) {
    packing();
  } else if (next == 4) {
    info.style.display = "none";
    bag.style.display = "flex";
    drag1.style.display = "none";
    drag2.style.display = "none";
    drag3.style.display = "none";
    drag4.style.display = "none";
    drag5.src = "clean1.png";
    drag6.src = "clean2.png";
    drag7.src = "clean3.png";
  } else if (next == 5) {
      go = 0;
    info.style.display = "none";
    blast.style.display = "flex";
    gege.style.display = "none";
    if (shipc == 1) {
      shipc1.src = "112.png";
    } else if (shipc == 2) {
      shipc1.src = "endev2.png";
    } else if (shipc == 3) {
      shipc1.src = "gem2.png";
    }
    if (suitc == 1) {
      suitc1.src = "uno.png";
    } else if (suitc == 2) {
      suitc1.src = "dos.png";
    } else if (suitc == 3) {
      suitc1.src = "tres.png";
    }
  }
}

/*funcions for choosing the suit */
function uno() {
  suit.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the classic suit!";
  text.innerHTML =
    "This suit is made so astronauts can breath in space! Most astronauts wear white suit.";
  suitc += 1;
}
function dos() {
  suit.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the purple suit!";
  text.innerHTML =
    "This suit is designed to let astronauts breath in space! It's also bright purple for fun!!";
  suitc += 2;
}
function tres() {
  suit.style.opacity = 0.5;
  title.style.opacity = 0.5;
  info.style.display = "flex";
  info.style.border = "3px solid black";
  choice.innerHTML = "You chose the orange suit!";
  text.innerHTML =
    "This suit makes breathing in spave a breeze! The orange color is just for fun!";
  suitc += 3;
}

/*functions for packing the suit case (drag and drop feature)*/
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    go += 1;
    console.log(go);
    if (go == 2){
        gege.style.display = "flex";
    }
  done.disabled = false;
  if (phase == 1) {
    done.disabled = false;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function packing() {
  info.style.display = "none";
  bag.style.display = "flex";
  if (phase == 0) {
    drag1.src = "food1.png";
    drag2.src = "food2.png";
    drag3.src = "food3.png";
    drag4.src = "/food4.png";
    drag1.style.display = "flex";
    drag2.style.display = "flex";
    drag3.style.display = "flex";
    drag4.style.display = "flex";
  } else if (phase == 1) {
    info.style.display = "flex";
    bag.style.display = "none";
    choice.innerHTML = "Continue Packing!!!";
    text.innerHTML = "Now it's time for the toiletries!! Pack up and don't forget your soap! Drag and drop the toiletries into the suitcase!"
  } else if (phase == 2) {
    bag.style.display = "none";
    title.innerHTML = "Choose your destination";
    going.style.display = "flex";
  }
}

function dones() {
  phase += 1;
  packing();
  done.disabled = true;
  if (pack == 1) {
    bag.style.display = "none";
    info.style.display = "flex";
  }
}
/*function for instructions to pack bag */
function packers() {
  pack += 1;
  console.log(pack);
  if (pack == 1) {
    info.style.display = "none";
    bag.style.display = "flex";
  } else if (pack == 2) {
    info.style.display = "none";
    bag.style.display = "flex";
  }
}

/*functions for Choose your destination */
function moons() {
  mars.disabled = true;
  jupiter.disabled = true;
  blastoff();
}
function marss() {
  moon.disabled = true;
  jupiter.disabled = true;
  blastoff();
}
function jupiters() {
  moon.disabled = true;
  mars.disabled = true;
  blastoff();
}

/*function for blast off */
function blastoff() {
  title.innerHTML = "Blast Off!!!";
  goings.style.display = "none";
  info.style.display = "flex";
  choice.innerHTML = "Blast Off!!!";
  text.innerHTML =
    "Now it's time to blast off, drag and drop the suitcase and astronaut suit into the ship and blast off!!";
}

function start() {
  //show the information about the trip and the rock being sent to the lab\
  blast.style.display = "none";
  title.innerHTML = "Good Job!!!"
  ending.style.display = "block";
}

/*function for going to the landing page*/
function home(){
    window.location.replace("index.html");
}
