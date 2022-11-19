export default function binarySearch(array:number[], element:number):number {
    let left = 0;
    let right = array.length-1;
    let middle = Math.floor((left+right) / 2);
    // fast track evaluations 
    if (element > array[right]) return -1;
    if (element < array[left]) return -1;
    if (element === array[right]) return right;
    if (element === array[left]) return left;
    // main functionality
    while (array[middle] !== element && left <= right) {
        if (array[middle] > element) right = middle -1
        else left = middle + 1;
        middle = Math.floor((right+left) / 2)
    }
    return array[middle] === element ? middle : -1
}
