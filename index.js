// Code your solution here
function findMatching(arr, name){
    const result = arr.filter((driver) => driver.toLowerCase() === name.toLowerCase())
    return result
}

function fuzzyMatch(arr, name){
    //slicing iterates through a string and is quicker to use than using for of/for loop 
    const result = arr.filter((driver) => name.slice() === driver.slice(0, name.length))
    return result
}

function matchName(arr, driverName){
    const result = arr.filter((driverObj) =>{

        //destructure the obj attributes to compare individually
        let {name, hometown} = driverObj
        if (name === driverName){return true}
    })

    return result
}

