/*// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from 
the dealer data containing only the car years and log the result in the console as it was returned.*/

function carDril4(inventoryData){

    var yearOfCar = [];
    for(let i = 0; i < inventoryData.length; i++){
        yearOfCar.push(inventoryData[i].car_year);
    }
   // console.log(yearOfCar)
   return yearOfCar;
}


module.exports.problem4 = carDril4;