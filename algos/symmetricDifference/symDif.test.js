const findSymmetricDifference =  require('./symDif')
require('jest')

describe('Function findSymmetricDiffrence :', ()=> {
  test('should be a function', () => { 
    expect(typeof findSymmetricDifference).toBe('function')
   })
   test('should find symmetric dif between 2 arrays', ()=> {
    expect(findSymmetricDifference([1,2,3],[2,3,4])).toStrictEqual([1,4])
   })
   test('should find sym dif between 2 arrays', () => {
    expect(findSymmetricDifference([1, 2, 3], [5, 2, 1, 4])).toStrictEqual([3, 4, 5])
    expect(findSymmetricDifference([1, 2, 3], [5, 2, 1, 4]).length).toBe(3)
   })
   test('should ignore duplicates in one array', () => {
    expect(findSymmetricDifference([1, 2, 3, 3], [5, 2, 1, 4])).toStrictEqual([3,4,5])
   })
})