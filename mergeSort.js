function mergeSort(array, half = array.length/2){
    if (array.length < 2){
        return array
    }
    const left = array.splice(0, half)
    return merger( mergeSort(left),mergeSort(array))
}

function merger(left, right){
    const arr =[]
    while ( left.length && right.length){
        if (left[0] < right[0]){
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ... right];
}

// O(n*log(n))