//  let t = new Date();
// console.log(t.getDate());
// console.log(t.getDay()+1);
// console.log(t.getMonth()+1);
//let mArr = [1, 2, 3, 4, 5];
// let mappedArr = mArr.map((x) => {
//     return x*x;
// });
// console.log("Mapped Array: " + mappedArr);


// let squareArr = [];
// for(let i=0; i<mArr.length; i++) {
//     squareArr[i] = mArr[i]*mArr[i];
// }

// polyfill map 
// function polyFilledMap(mArr, cb) {
//     let mappedArr = [];
//     for(let i=0; i<mArr.length; i++) {
//         mappedArr.push(cb(mArr[i]));
//     }
//     return mappedArr;
// }

// function square(x) {
//     return x*x;
// }

// let polyFilledMapArr = polyFilledMap(mArr, square);
// console.log("PolyFilledMap Array: " + polyFilledMapArr);


// filter
/*
let fArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let filterdArr = fArr.filter((x) => {
    return x%2 === 0;
});
console.log(filterdArr);

// polyfilledFilter
function polyFilledFilter(fArr, cb) {
    let filterdArr = [];
    for(let i=0; i<fArr.length; i++) {
        if(cb(fArr[i]) != undefined)
            filterdArr.push(fArr[i]);
    }
    return filterdArr;
}

function isEven(x) {
    if(x%2 == 0) {
        return x;
    }
}

let evenNum = polyFilledFilter(fArr, isEven);
console.log(evenNum);
*/

// reduce
/*
let rArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumOfArr = rArr.reduce((accumulator, x) => {
    return accumulator + x;
}, 0);
console.log(sumOfArr);

// polyfill of Reduce
function polyFilledReduce(rArr) {
    let sum = 0;
    for(let i=0; i<rArr.length; i++) {
        sum += rArr[i];
    }
    return sum;
}

let sumOfArrPolyFilled = polyFilledReduce(rArr);
console.log(sumOfArrPolyFilled);
*/
