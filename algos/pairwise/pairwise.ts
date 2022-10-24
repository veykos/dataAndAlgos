export default function pairwise(arr:number[], arg:number):number {
    const arrCopy = [...arr]
    let indicesSum = 0
    arrCopy.forEach((val, indx, arr) => {
        const searchedPairValue = arg - val;
        const indexOfSearchedPairValue = arr.indexOf(searchedPairValue)
        // check if index of searched pair exists, if it's already used or if its the same number
        if (indexOfSearchedPairValue !== -1 && indexOfSearchedPairValue !== indx) {
            indicesSum += indx + indexOfSearchedPairValue
            arr[indx] = NaN;
            arr[indexOfSearchedPairValue] = NaN
        }
    })
    return indicesSum
  }

  pairwise([0, 0, 0, 0, 1, 1], 1)
