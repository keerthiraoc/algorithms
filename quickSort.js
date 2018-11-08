function quickSort(arr, length = arr.length-1, start=0){
    if (arr.length < 2) return arr

    const pivot  = arr[arr.length-1], left =[], right = []
    while (start < length){
        if (arr[start] <pivot) left.push(arr[start])
        else right.push(arr[start])
        start++
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// O(nlog(n)