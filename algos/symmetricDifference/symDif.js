function findSymmetricDifference(arr1,arr2) {
  const finalArr = []
  //working for 2 arrays
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
  // version for 3 or more arrays
  

  return finalArr.sort((a,b) => a-b)
}

module.exports = findSymmetricDifference