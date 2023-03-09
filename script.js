var money = 0;
var timesClicked = 0;
var production = 10000
var intervalId;
var upgrade = -100

function counting() {
    //  Basically, when the button is pressed we increment money by the production variable.
    if (!intervalId) {
        intervalId = self.setInterval(function() {
            money++;    // increment money
            document.getElementById("cash").innerHTML = money;
            console.log(money+" wheat gathered");
        }, production); // money increments based on production variable
    }
    timesClicked++;
    console.log(timesClicked);
    console.clear();

    let formattedNumber = production.toLocaleString();
    console.log(formattedNumber+': tickspeed');
}