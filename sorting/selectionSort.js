const selectionSort = (arr) => {
    let minimumIndex = 0;
    for(let i = 0; i < arr.length; i++){
        minimumIndex = i;
        for(let j = i; j < arr.length; j++){
            if(arr[minimumIndex] > arr[j]){
                minimumIndex = j;
            }
        }
        let temp = arr[minimumIndex];
        arr[minimumIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arr = [7, 89, 3, 4, 5, 12, 789, 7000, 987, 1, 2, 6, 456];
console.log(selectionSort(arr)); // Logs: [1, 2, 3, 4, 5, 6, 7, 12, 89, 456, 789, 987, 7000]