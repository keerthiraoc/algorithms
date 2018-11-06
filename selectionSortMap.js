function selectionSort(arr, length=arr.length) {
    arr.map((e, i) => {
        let min = i;

        for ( let j= i+1; j<length; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }
        if (i !=min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    })
    return arr
}