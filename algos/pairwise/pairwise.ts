export default function pairwise(arr:number[], arg:number):number {
    let indicesSum = 0
    let usedIndx:number[] = []
    arr.forEach((val, indx) => {
        const searchedPairValue = arg - val;
        const indexOfSearchedPairValue = arr.indexOf(searchedPairValue)
        // check if index of searched pair exists, if it's already used or if its the same number
        if (indexOfSearchedPairValue !== -1 && !usedIndx.includes(indexOfSearchedPairValue) && indexOfSearchedPairValue !== indx) {
            indicesSum += indx + indexOfSearchedPairValue
            usedIndx.push(indx, indexOfSearchedPairValue)
        }
    })
    return indicesSum
  }

  pairwise([0, 0, 0, 0, 1, 1], 1)
