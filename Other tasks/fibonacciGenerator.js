function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:

    var fArray = [];

    if ( n === 0) {
        return fArray;
    }
    else if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0, 1];
    }
    else {
        fArray = [0, 1];
        var num = 0;

        for (var i = 2; i < n; i ++) {

            num = fArray[i - 1] + fArray[i - 2];
            console.log(num + " " + fArray);

            fArray.push(num);
        }

        return fArray;
    }



    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

fibonacciGenerator(15);
