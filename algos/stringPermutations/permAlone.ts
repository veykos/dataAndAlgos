export default function permAlone(str:string) {
    const permHolder:string[] = []
    if (str.length === 1) {
        return str
    }
    for (let i = 0; i< str.length; i++) {
        let char = str[i]
        let remainingChars = str.slice(0,i) + str.slice(i+1)

        for (let permutation of permAlone(remainingChars)){
            permHolder.push(char+permutation)
        }
    }

  }
  

//   export default function permAlone(str:string, indx?:number):string[] | string {
//     const permHolder:string[] = []
//     if (str.length === 1) {
//         return str
//     }
//     for (let i = 0; i< str.length; i++) {
//         let char = str[i]
//         let remainingChars = str.slice(0,i) + str.slice(i+1)

//         for (let permutation of permAlone(remainingChars)){
//             permHolder.push(char+permutation)
//         }
//     }
//     const pattern = new RegExp('([a-z])\\1')
//     return permHolder.filter(ele => !pattern.test(ele))
//   }
  


// permAlone('aba')