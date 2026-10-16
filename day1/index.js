//hoisting
console.log(a);
var a;
a=2;
{
    var a="2";
    a=2+"2";
    console.log(a);
}
console.log(a);