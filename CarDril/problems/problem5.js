/* ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained 
from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and 
log its length.*/


//Imported the problem4.js file with data.josn
const resultOdCarDril4 = require('./problem4');
const inventoryData=require("../data.json")

//Stored the array output of problem4 in arrayData variable.
const arrayData  = resultOdCarDril4.problem4(inventoryData)


//console.log(arrayData);

function carDril5(inventoryData){
    let arrayOfOlderCar = [];
   for(let i = 0; i < arrayData.length; i++){
    if(arrayData[i] < 2000){
        arrayOfOlderCar.push(arrayData[i])
    }
   }
   //console.log(arrayOfOlderCar)
   return `${arrayOfOlderCar} and  ${arrayOfOlderCar.length}`
}

module.exports.problem5 = carDril5;