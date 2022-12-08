// Exported for use in bucketSort
export const insertionSort = (arr) => {
    let i = 0;
    let j = 0;

    // Outer loop increments until the end of the array.
    while(i < arr.length){

        // Inner loop decrements until the base of the 'sorted' array
        // Compares and swaps until the new value is in it's sorted spot.
        j = i
        while(j > 0){
            if(arr[j - 1] > arr[j]){
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
            j--;
        }
        i++;
    }
    return arr;
}


let arr = [7, 89, 3, 4, 5, 12, 789, 7000, 987, 1, 2, 6, 456];
console.log(insertionSort(arr)); // Logs: [1, 2, 3, 4, 5, 6, 7, 12, 89, 456, 789, 987, 7000]
