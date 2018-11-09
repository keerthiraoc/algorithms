def binarySearch(Arr, target):
    start, end = 0, len(Arr)-1
    while start <= end:
        mid = (start + end)//2
        if target == Arr[mid] :
            return mid
        elif Arr[mid] < target:
            start = mid +1
        else :
            end = mid -1
    return -1

# input Arr = A sorted array
# input target = value needed to find in the array
# binary search