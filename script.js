var btn = document.getElementById("wheatbtn");
var money = 0;
var level = 0;
var production = 10000
var intervalId;

var upgrad = 100;
var upCost = 5;

let enuf = 0;



function counting() {


    //  Basically, when the button is pressed we increment money by the production variable.
    if (!intervalId) {
        intervalId = self.setInterval(function() {
            money++;    // increment money
            document.getElementById("cash").innerHTML = money;
            console.log(money+" wheat gathered");
        }, production); // money increments based on production variable
    }
    
    level++
    document.getElementById("counter").innerHTML = level;   // level of wheat
    
    if (level == 100) {
        console.log("Wheat: Max Level Reached");}

    if (level > 99) {
        level = 99;}


    let formattedNumber = production.toLocaleString(); //formats the money per tick.
    console.log(formattedNumber+': tickspeed');

}
/*
For every level of wheat, deduct 100 from the production variable.
*/
