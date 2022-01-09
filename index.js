function start(){
    window.location.replace('home.html');
}

function pages(){
    window.open('https://spaceplace.nasa.gov/coloring-pages/en/', '_blank');
}

function credit(){
    document.getElementById('buttons').style.display = "none";
    document.getElementById('credits').style.display = "block";
}

function back(){
    document.getElementById('buttons').style.display = "flex";
    document.getElementById('credits').style.display = "none";
}

window.onload = function(){
    document.getElementById('credits').style.display = "none";
}