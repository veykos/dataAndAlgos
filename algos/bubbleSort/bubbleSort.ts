// function bubbleSort(array:number[]) {
//     for (let i = 0; i< array.length; i ++) {
//         for (let j = 0; j < array.length-1-i; j++) {
//             if (array[j] > array[j+1]) {
//                 [array[j], array[j+1]] = [array[j+1], array[j]]
//             }
//         }
//     }
//     return array;
//   }

function bubbleSort(array:number[]):number[] {
    let swap = true ;
    while(swap) {
        let swapHappened = false
        for (let i = 0 ; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swapHappened = true
            }
        }
        if (swapHappened === false) {
            swap = false
        }
    }
    return array
}

//  bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])