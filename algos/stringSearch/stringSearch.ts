export default function stringSearch(
  string: string,
  substring: string
): number {
	let counter = 0;
  for (let i= 0 ; i < string.length; i++) {
		for ( let j= 0 ; j < substring.length ; j++) {
			if (substring[j] !== string[i+j]){
				break
			}
			if (j === substring.length - 1) {
				counter++
			}
		}
	}

  return counter;
}

