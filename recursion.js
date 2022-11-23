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
    // Base Cases: 0, 1, 2
    if(len === 0 || isNaN(len)){
        return [];
    }
    if(len === 1){
        return [0];
    }
    if(len === 2){
        return [0,1];
    }
    // Extra cases for some memoization
    if(len === 3){
        return [0,1,1]
    }
    if(len === 4){
        return [0,1,1,2]
    }
    if(len === 5){
        return [0,1,1,2,3]
    }

    return [...recursiveFibonacci(len - 1), recursiveFibonacci(len - 1)[len - 2] + recursiveFibonacci(len - 1)[len - 3]];
}

const mergeSort = function(arr){
    // Base case: return array on size of 1 or 0
    if(arr.length <= 1){
        return arr;
    }

    // Find the middle index of the array and round down.
    let mid = Math.floor(arr.length/2);

    // Create a new array from the left half of the original array.
    // and then recursively call mergeSort on the new left half.
    let leftArr = arr.slice(0,mid);
    leftArr = mergeSort(leftArr);

    // Create a new array from the right half of the original array.
    // and then recursively call mergeSort on the new right half.
    let rightArr = arr.slice(mid,arr.length);
    rightArr = mergeSort(rightArr);

    // Merge the sorted left and sorted right array.
    let newArray = merge(leftArr,rightArr);
    return newArray;

}

// Takes two sorted arrays and merges them
const merge = function(leftArr, rightArr){
    let L = 0;
    let R = 0;
    let count = 0;
    let newArray = [];

    // Put the smaller value between the front of the sorted arrays on the new list
    // then increment the array of the placed value and increment the new array.
    while(L < leftArr.length  && R < rightArr.length){
        if(leftArr[L] < rightArr[R]){
            newArray[count++] = leftArr[L++];
        }
        else{
            newArray[count++] = rightArr[R++];
        }
    }

    // Once one of the pointers exceeds the length of it's array,
    // Place the rest of the values from the other array in the new array.
    while(L < leftArr.length){
        newArray[count++] = leftArr[L++]
    }
    while(R < rightArr.length){
        newArray[count++] = rightArr[R++]
    }

    return newArray;
}

// Fibonacci and recursive Fibonacci Tests
fibonacci(8);
console.log(myFibonacci); // Log: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(recursiveFibonacci(8)); // Log: [0, 1, 1, 2, 3, 5, 8, 13]

// Merge Tests
let leftArray = [0,2,6,8,9,14,45,56,900];
let rightArray = [1,3,5,7,9,11,13];
console.log(merge(leftArray,rightArray)); // Log: [0,  1,  2,   3,  5,  6,7,  8,  9,   9, 11, 13,14, 45, 56, 900]

//mergeSort Tests
let mixedArray = [9,8,7,6,5,4,3,2,1];
console.log(mergeSort(mixedArray)); // Log: [1,2,3,4,5,6,7,8,9]
mixedArray = [1,2,3,4,5,6,7,8,9];
console.log(mergeSort(mixedArray)); // Log: [1,2,3,4,5,6,7,8,9]
mixedArray = [400,200,300,20,10,5,3,9000];
console.log(mergeSort(mixedArray)); // Log: [3, 5, 10, 20, 200, 300, 400, 9000]



