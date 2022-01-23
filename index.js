var numQuestions = 28;
var currentPoints = 1;
var barPoints = 10;
var pointsPerQuestion = 8.5/numQuestions;

function startOver(){
    currentPoints = 1;
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    
}

function getPoints(){
    currentPoints = JSON.parse(localStorage.getItem('currentPoints')); //getter
    document.getElementById('myTriangle').style.marginLeft = currentPoints*10 + "%";

}

function getFinalResult(){
    currentPoints = JSON.parse(localStorage.getItem('currentPoints')); //getter
    document.getElementById('myTriangle').style.marginLeft = currentPoints*10 + "%";
    if (currentPoints < 2) {
        document.getElementById('result').innerHTML = "Your digital privacy is at low risk.";
    } else if (currentPoints < 4) {
        document.getElementById('result').innerHTML = "Your digital privacy is at relatively low risk.";
    } else if (currentPoints < 6) {
        document.getElementById('result').innerHTML = "Your digital privacy is at moderate risk.";
    } else if (currentPoints < 8) {
        document.getElementById('result').innerHTML = "Your digital privacy is at relatively high risk.";
    } else {
        document.getElementById('result').innerHTML = "Your digital privacy is at severe risk.";
    }
}

function updatePointsQ1(){
    if (document.getElementById("change").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("change").value > 3) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ2() {
    if (document.getElementById("Q2Worst").checked) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q2Average").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ3() {
    if (document.getElementById("Q3Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ4() {
    if (document.getElementById("Q4Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ5() {
    if (document.getElementById("response").value < 3) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value < 7) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ6() {
    if (document.getElementById("response").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value > 3) {
        currentPoints += pointsPerQuestion;
    }
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ7() {
    if (document.getElementById("response").value < 3) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value < 7) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ8() {
    if (document.getElementById("Q8A").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8B").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8C").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8D").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8E").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ9() {
    if (document.getElementById("Q9Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ10() {
    if (document.getElementById("Q10Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ11() {
    if (document.getElementById("response").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value > 3) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ12() {
    if (document.getElementById("Q12Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ13() {
    if (document.getElementById("Q13B").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q13C").checked) {
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q13D").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ14() {
    if (document.getElementById("Q14Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}

function updatePointsQ15() {
    if (document.getElementById("Q15Worst").checked) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q15Average").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
}
// document.getElementById('myTriangle').style.marginLeft = "75%";
