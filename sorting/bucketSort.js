const bucketSort = (arr, buckets) => {
    let bucketArray = Array(buckets)

    // Every "bucket" is a list
    for (let i = 0; i < buckets; i++)
    {
        bucketArray[i] = [];
    }
    // Insert every arr item into a bucket.
    for(let i = 0; i < arr.length; i++){
        bucketArray[buckets * arr[i]] = arr[i]
    }
    // Sort each bucket
    for(let j = 0; j < bucketArray.length; j++){
        bucketArray[j] = insertionSort(bucketArray[j]);
    }
    // TODO: Concatenate


}

const insertionSort = (arr) => {
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

// Driver Code
let arr = [0.897, 0.565,
        0.656, 0.1234,
        0.665, 0.3434];
let buckets = Math.floor(arr.length / 2);

console.log(bucketSort(arr,buckets));