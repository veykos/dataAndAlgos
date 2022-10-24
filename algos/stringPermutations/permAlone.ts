export default function permAlone(str: string) {
	function permHelper(stri: string): string[] {
    if (stri.length === 1) {
      return [stri];
    }
    const permHolder: string[] = [];
    for (let i = 0; i < stri.length; i++) {
      // take the character at position i
      let char = stri[i];
      // slice the remaining characters off the string before and after char at pos i
      // and concatenate them
      let remainingChars = stri.slice(0, i) + stri.slice(i + 1);

			// recurse back into the function
      for (let permutation of permHelper(remainingChars)) {
        permHolder.push(char + permutation);
      }
    }
    return permHolder;
  }
  const pattern = new RegExp("([a-z])\\1");
  return permHelper(str).filter((ele) => !pattern.test(ele)).length;
}

permAlone('aba')
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
