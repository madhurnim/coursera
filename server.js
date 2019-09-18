var rect = require('./rectangle.js');

function solve(l,b){
    console.log("l   " + l + "   b    " + b);

    if(l<=0 || b<=0)
    console.log("Invalid Dimensions");
    else{
        console.log("Area" + rect.area(l,b));
        console.log("Perimeter" + rect.perimeter(l,b));
        console.log(rect);
    }
}

solve(2,3);