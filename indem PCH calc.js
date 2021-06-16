var ap = prompt("Enter the AP");
var rp = prompt("Enter the RP");
var sum = Number(ap) / (Number(ap) + Number(rp)) * 100;
var s = sum.toFixed(2);
alert(s + "%");
var sum2 = 100 - s;
alert(sum2 + "%");