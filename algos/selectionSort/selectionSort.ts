export default function selectionSort(arr:number[]):number[] {
	for (let i = 0; i < arr.length; i ++) {
		let minValue = arr[i];
		let minValueIdx = i;
		let swapNeeded = false
		for (let j = i + 1; j < arr.length; j ++) {
			if (arr[j] < minValue) {
				minValue = arr[j]
				minValueIdx = j
				swapNeeded = true
			}
		}
		if (swapNeeded) {
			[arr[i],arr[minValueIdx]] = [arr[minValueIdx], arr[i]]
		}
	}

	return arr
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])