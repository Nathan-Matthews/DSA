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

let myFibonacci = [];
function fibsRec(len){
    if(len == 0){
        myFibonacci.push(0);
        return 0;
    }
    if(len == 1){
        myFibonacci.push(1);
        return 1;
    }
    if(len > 1){
        myFibonacci.push(fibsRec(len - 1) + fibsRec(len - 2));
        return
    }
}

fibsRec(2);
console.log(myFibonacci);