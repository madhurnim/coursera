var rect = {
    perimeter: (x,y) =>(2*(x + y)),
    area: (x,y) => (x*y)
};

function solve(l,b){
    console.log("l   " + l + "   b    " + b);

    if(l<=0 || b<=0)
    console.log("Invalid Dimensions");
    else{
        console.log("Area" + rect.area(l,b));
        console.log("Perimeter" + rect.perimeter(l,b));
    }
}

solve(2,3);