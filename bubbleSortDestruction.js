function bubbleSort(arr) {
    arr.map(e1 => arr.map((e2, i) => {
        if (arr[i] > arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }))
    return arr
}