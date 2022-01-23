var numQuestions = 28;
var currentPoints = 0;
var barPoints = 10;
var pointsPerQuestion = 9.5/numQuestions;
function getPoints(){
    currentPoints = JSON.parse(localStorage.getItem('currentPoints')); //getter
    document.getElementById('myTriangle').style.marginLeft = currentPoints*10 + "%";
    console.log(currentPoints);
}

function updatePointsQ1(){
    if (document.getElementById("change").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("change").value > 3) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q1", currentPoints);
}

function updatePointsQ2() {
    if (document.getElementById("Q2Worst").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q2Average").checked) {
        console.log("average");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q2", currentPoints);
}

function updatePointsQ3() {
    if (document.getElementById("Q3Worst").checked) {
        console.log("Q3Worst");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q3", currentPoints);
}

function updatePointsQ4() {
    if (document.getElementById("Q4Worst").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q4", currentPoints);
}

function updatePointsQ5() {
    if (document.getElementById("response").value < 3) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
        console.log("worst range");
    } else if (document.getElementById("response").value < 7) {
        currentPoints += pointsPerQuestion;
        console.log("average range");
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q5", currentPoints);
}

function updatePointsQ6() {
    if (document.getElementById("response").value > 7) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value > 3) {
        console.log("average");
        currentPoints += pointsPerQuestion;
    }
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log("Q6", currentPoints);
}

function updatePointsQ7() {
    if (document.getElementById("response").value < 3) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value < 7) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ8() {
    if (document.getElementById("Q8A").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8B").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8C").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8D").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q8E").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ9() {
    if (document.getElementById("Q9Worst").checked) {
        console.log("Q9Worst");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ10() {
    if (document.getElementById("Q10Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ11() {
    if (document.getElementById("response").value > 7) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("response").value > 3) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ12() {
    if (document.getElementById("Q12Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ13() {
    if (document.getElementById("Q13B").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q13C").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    if (document.getElementById("Q13D").checked) {
        console.log("worse");
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ14() {
    if (document.getElementById("Q14Worst").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}

function updatePointsQ15() {
    if (document.getElementById("Q15Worst").checked) {
        currentPoints += pointsPerQuestion;
        currentPoints += pointsPerQuestion;
    } else if (document.getElementById("Q15Average").checked) {
        currentPoints += pointsPerQuestion;
    } 
    localStorage.setItem("currentPoints", JSON.stringify(currentPoints)); //setter
    console.log(currentPoints);
}
// document.getElementById('myTriangle').style.marginLeft = "75%";
