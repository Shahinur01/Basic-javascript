




function kilometerToMeter(kilometer){
    if (typeof kilometer !== "number"){
        return "this is not a number"
    }

    if(kilometer <0){
        return "Error.Please check your input.Distance cannot be nagative."
    }
    var meter =kilometer*1000;
    return meter;

}
var nanimeter =kilometerToMeter(30);
console.log(nanimeter);

var monuMeter =kilometerToMeter(88);
console.log(monuMeter);

var momoMeter =kilometerToMeter(-09);
console.log(momoMeter);






// HOTELCOST 3 number
 
function hotelCost(days){
    var totalCost =0;

    if (typeof days !== "number"){
        return "This not a number.";
    }
    else if (days<0){
        return "day can not negative number.";
    }
    else if (days > 0 && days <= 10){
        return (totalCost =days *100);
    }
    else if (days >= 11 && days <= 20) {
        return (totalCost = (days-10) * 80 + 1000);
    }
    else days > 20;
        return (totalCost = (days-20) * 50 + 1800);
    return totalCost;
}

var count =hotelCost(5);
console.log(count);



// budgetCalculator
function budgetCalculator (
    watchQuantity = 0,
    mobileQuantity = 0,
    laptopQuantity = 0

) {
    var totalPrice = 0;
    var perWatchPrice = 50;
    var perMobilePrice = 100;
    var perLaptopPrice = 500;

    if (
        typeof watchQuantity !== "number" ||
        typeof mobileQuantity !== "number" ||
        typeof laptopQuantity !== "number" 
    ){
        return "Please enter any positive number of quantity";
    }
     else if (watchQuantity < 0 || mobileQuantity < 0 || laptopQuantity < 0){
        return "Quantity can not nagative number.";
    }
     else 
         return (totalPrice =
            watchQuantity * perWatchPrice +
            mobileQuantity * perMobilePrice +
            laptopQuantity * perLaptopPrice);

}
var price =budgetCalculator(2);
console.log(price);

// magafriend 4 number

function megaFriend (nam){
var show =[];
    for ( var i = 0; i < nam.length; i ++){
        var check = nam [i].length;
        var checkSpace = nam [i].split (" ").length;
        var calc =check-checkSpace;
        if (calc >show.length){
            show=nam[i];
        }

    }
    if (show == 0){
        console.log(
            "hay man you are not on the  right track");
    }
     else {
        return show;
    }
}
var result = megaFriend(["shahinur", "babu", "shahinur islam"]);
console.log(result, result.length);