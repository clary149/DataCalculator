var numQuestions = 4;
var currentPoints = 0;
var barPoints = 10;
var pointsPerQuestion = 9.5/numQuestions;
function getPoints(){
    currentPoints = JSON.parse(localStorage.getItem('currentPoints')); //getter
    document.getElementById('myTriangle').style.marginLeft = currentPoints*10 + "%";
    console.log(currentPoints);
}

function updatePoints(){
    if (document.getElementById("Q1").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q1").value > 3) {
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q2B").checked) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q2A").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

// document.getElementById('myTriangle').style.marginLeft = "75%";
