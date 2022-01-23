var numQuestions = 5;
var currentPoints = 0;
var barPoints = 10;
var pointsPerQuestion = 10/numQuestions;
if (moreAtRiskOption) {
	currentPoints += pointsPerQuestion;
}
else {
    currentPoints -= pointsPerQuestion;
}
document.getElementById('myTriangle').style.width = currentPoints * 100 + "%";