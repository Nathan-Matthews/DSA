const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        // Last i elements are already in place.
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [7, 89, 3, 4, 5, 12, 789, 7000, 987, 1, 2, 6, 456];
console.log(bubbleSort(arr)); // Logs: [1, 2, 3, 4, 5, 6, 7, 12, 89, 456, 789, 987, 7000]