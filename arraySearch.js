function numberOfItems(arr, item) {
    var sum = 0;
    for (let a of arr) {
        if (typeof a === "object") {
            sum = sum + numberOfItems(a, item);
        }
        else {
            if (a === item) {
                sum = sum + 1;
            }
        }
    }
    return sum;
}




var arr = [

    25,

    "apple",

    ["banana", "strawberry", "apple", 25]

];



console.log(numberOfItems(arr, 25));

console.log(numberOfItems(arr, "apple"));