/*// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car 
model names into alphabetical order and log the results in the console as it was returned.*/


function carDril3(inventoryData){
    let carModelSorted = [];
    for(let i = 0 ; i < inventoryData.length; i++){
        carModelSorted.push(inventoryData[i].car_model);
    }
   // console.log(carModelSorted)

    return carModelSorted.sort();
}

module.exports.problem3 = carDril3;