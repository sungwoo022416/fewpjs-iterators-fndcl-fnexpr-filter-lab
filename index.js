// Code your solution here
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()) 
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.indexOf(string) === 0 )
}