export default function linearSearch(array:Array<String | Number>,item:String | Number) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i] === item) {
            return i
        }
    }
    return -1
}