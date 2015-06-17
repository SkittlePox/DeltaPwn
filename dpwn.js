var speed = 1000 + Math.round((Math.random() * 400));

function dpwn() {
    for (var i = 0; i < document.getElementById("theProblem1").children.length; i++) {
        if (document.getElementById("quest" + i).getAttribute("correct") == 1) {
            document.getElementById("quest" + i).click();
            break;
        }
    }
    var done = document.getElementById("currentScore").innerHTML;
    var dspl = done.split("/");
    if (dspl[0] == dspl[1]) {
        document.getElementById("startStop").click();
    } else setTimeout('dpwn()', speed);
}
console.log(speed + " milliseconds per question");
document.getElementById("startStop").click();
dpwn();