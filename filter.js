function filterNumbersFromArray(arr) {
    var i = 0;
    
    while (i < arr.length) {
        if (typeof arr[i] !== 'number') {
            arr.splice(i, 1);
            i--;
        }
        i++;
        
    }
}

var arr = [1, 'a', 'b', 2];

filterNumbersFromArray(arr);

// At this point, arr should have been modified in place

// and contain only 1 and 2.

for (var i = 0; i < arr.length; i++)

    console.log(arr[i]);