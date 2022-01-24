const pointsAsJSON = {
    "tests": [
        {
        "maxPoints": "25",
        "scoredPoints": "20"
        },
        {
        "maxPoints": "120",
        "scoredPoints": "100"
        },
        {
        "maxPoints": "78",
        "scoredPoints": "59"}
    ]
}
const count = Object.keys(pointsAsJSON.tests);
var grades = "Your grades: ";
function calculate() {
    for (let i = 0; i < count.length; i++) {
    var grade = (pointsAsJSON.tests[i].scoredPoints*5)/pointsAsJSON.tests[i].maxPoints + 1;
    grades = grades+grade+", ";
    }
document.getElementById("grades").innerHTML = grades;
}
