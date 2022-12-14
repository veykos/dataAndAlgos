function findSymmetricDifferenceInTwoArrs(arr1:number[],arr2:number[]):number[] {
  const finalArr:number[] = []
  //filter duplicates inside the array
  arr1 = arr1.filter((ele,idx,arr) => arr.indexOf(ele) === idx)
  arr1.forEach(ele => {
    if (!arr2.includes(ele)) {
      finalArr.push(ele)
    }
  })
  arr2 = arr2.filter((ele,idx,arr) => arr.indexOf(ele) === idx)
  arr2.forEach(ele => {
    if (!arr1.includes(ele)) {
      finalArr.push(ele)
    }
  })
  return finalArr.sort((a,b) => a - b)
}

export default function findSymmetricDifference(arr1:number[],arr2:number[],...args:number[][]):number[] {
  let argArr = Array.from(arguments)
  argArr = argArr.reduce((prev,next) => {
    return findSymmetricDifferenceInTwoArrs(prev,next)
  })
  return argArr
}

