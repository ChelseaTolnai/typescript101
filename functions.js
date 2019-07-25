var string = "1";
var addToString = function (str) {
    string += str;
    return str;
};
console.log(string);
addToString("2");
addToString(3);
addToString(["hi"]);
console.log(string);
var arr = ["hello"];
arr.push(4);
console.log(arr);
