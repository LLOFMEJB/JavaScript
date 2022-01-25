// equilateral eşkenar
// isosceles   ikizkenar ve eşkenar
// scalene     farklı kenarlar
// x+y=z ise degenerate triangle


const checkTriangle = (a, b, c) => {
    if(a !== 0  && b !== 0 && c !== 0 ){
        if (a+b>c && b+c>a && c+a>b) {
            if (a === b && b === c) {
                console.log("Equilateral");
            } else if (((a == b) && (b !== c)) || ((b == c) && (b !== c)) || ((a == c) && (c !== b))) {
                console.log("Isosceles");
            } else {
                console.log("Scalene");
            }
        } else {
            console.log("Sum of any two sides must be bigger than other one");
        }
    } else {
        console.log("Do not use 0");
    }
};

checkTriangle(5,4,1)