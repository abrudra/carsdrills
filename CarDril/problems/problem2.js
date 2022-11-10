/*The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model 
of the last car in the inventory is? 
Log the make and model into the console in the format of: 

"Last car is a *car make goes here* *car model goes here*"

*/

function carDril2(inventoryData){
    let lastElement = inventoryData[inventoryData.length - 1 ]
    //console.log(lastElement)
   
    return `Last car is a ${lastElement.car_make} ${lastElement.car_model}`
    // }
}

module.exports.problems2 = carDril2;