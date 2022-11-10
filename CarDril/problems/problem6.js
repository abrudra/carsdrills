/*// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that 
only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array
 in the console.*/

 function carDril5(inventoryData){
    let bmwAndAudi =[];
    for(let i = 0; i < inventoryData.length; i++){
        if(inventoryData[i].car_make === "BMW" || inventoryData[i].car_make === "Audi"){
            bmwAndAudi.push(inventoryData[i]);
        }
    }
  // console.log(bmwAndAudi)
  //console.log(JSON.stringify(bmwAndAudi));

  return JSON.stringify(bmwAndAudi);
 }

 module.exports.problem6 = carDril5;