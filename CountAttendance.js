'use strict';
var fs = require('fs');
const data = fs.readFileSync('FreePlaces.txt','utf8');
const comReg = /Мест: [0-9]{1,4}/g;
let freePlaces = 0;
let testArr = data.match(comReg);
for(let i = 0 ; i<testArr.length;i++)
{
    freePlaces += parseInt(testArr[i].substring(6));
}
console.log("осталось мест: ", freePlaces);

