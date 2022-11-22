let myFibonacci = []; // Empty array for storing results of 'fibonacci'
const fibonacci = function(len){
    let count = 0;
    if(len == 0){
        return myFibonacci;
    }
    count++;
    myFibonacci.push(0);
    if(len == 1){
        return myFibonacci;
    }
    count++;
    myFibonacci.push(1);
    if(len == 2){
        return myFibonacci;
    }
    while(count < len){
        myFibonacci.push(myFibonacci[count - 2] + myFibonacci[count -1]);
        count++;
    }
    return myFibonacci;
}

const recursiveFibonacci = function(len){
    if(len < 2){
        return len;
    }
    return recursiveFibonacci(len - 1) + recursiveFibonacci(len - 2);
}

const mergeSort = function(arr){

}

// Takes two sorted arrays and merges them
const merge = function(leftArr, rightArr){
    let L = 0;
    let R = 0;
    let count = 0;
    let newArray = [];
    while(L < leftArr.length  && R < rightArr.length){
        if(leftArr[L] < rightArr[R]){
            newArray[count++] = leftArr[L++];
        }
        newArray[count++] = rightArr[R++];
    }
    while(L < leftArr.length){
        newArray[count++] = leftArr[L++]
    }
    while(R < rightArr.length){
        newArray[count++] = rightArr[R++]
    }
    return newArray;

}


fibonacci(8);
console.log(myFibonacci); // Returns [0, 1, 1, 2, 3, 5]
console.log(recursiveFibonacci(8)); // Returns 8

let leftArray = [0,2,6,8,9,14,45,56,900];
let rightArray = [1,3,5,7,9,11,13];
console.log(merge(leftArray,rightArray)); //

