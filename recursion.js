function fibs(len){
    let myFibonacci = [];
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

function fibsRec(len){
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return 1;
    }
    return fibsRec(len - 1) + fibsRec(len - 2);
}

function mergeSort(arr){
    
}

let myFibonacci = [];
fibsRec(6);
console.log(fibsRec(6));