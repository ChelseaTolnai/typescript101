let string:string = "1"

let addToString = <T>(str: T): T => {
    string += str
    return str;
}

console.log(string)
addToString("2")
addToString(3)
addToString(["hi"])
console.log(string)

let arr:string[] = ["hello"];
arr.push(4);
console.log(arr);