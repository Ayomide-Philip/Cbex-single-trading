


function NewCapital() {
    let numberOfTimeTrading = Number(document.getElementById("numberOfTime").value);
    let tradingAmount = Number(document.getElementById("tradingAmount").value);
    
    if (isNaN(numberOfTimeTrading) || numberOfTimeTrading <= 0) {
        document.getElementById("error2").style.display = "block";
        document.getElementById("error2").innerHTML= "Input the number of times you want to trade once";
        document.getElementById("display-input").style.display = "none";
        return; // Exit the function if input is invalid
    } else {
        document.getElementById("error2").style.display = "none";
    }

    if (isNaN(tradingAmount) || tradingAmount <= 0) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML= "Input your current trading capital";
        document.getElementById("display-input").style.display = "none";
        return; // Exit the function if input is invalid
    } else {
        document.getElementById("error").style.display = "none";
    }

    if (tradingAmount < 100) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML= "The least amount you can invest is $100, so you need $" +(100 - tradingAmount) ;
        document.getElementById("display-input").style.display = "none";
        return; // Exit the function if input is invalid
    } else {
        document.getElementById("error2").style.display = "none";
    }
   

    var newTradingCapital ;
    let i = 1;

    while (i <= numberOfTimeTrading) {
        let newTradingAmount = tradingAmount - 0.01*(tradingAmount);
        newTradingCapital = newTradingAmount + 0.01*(tradingAmount) + (0.01*(tradingAmount) - 0.07*(0.01*(tradingAmount)));
        
        tradingAmount = newTradingCapital;
        i++;
    }
    
    console.log('numberOfTimeTrading:', numberOfTimeTrading);
console.log('Initial i:', i);

    document.getElementById("display-input").style.display ="block";
    document.getElementById("display-input").value ="You new trading Capital is $"+ newTradingCapital + " after " + numberOfTimeTrading + "days";
    
    return newTradingCapital;
}


function dismiss() {
    document.getElementById("warning").style.display ="none";
}
