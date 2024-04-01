const data = require("./db.json");

const getAllDrivers = () => {
    return data.drivers;
}

// const getDriverById = (driverId) => {
//     return DB.drivers.find(driver => driver.id === driverId);
// }

// const createDriver = (driver) => {
//     DB.drivers.push(driver);
//     return driver;
// }

// const updateDriver = (driver) => {
//     const driverIndex = DB.drivers.findIndex(d => d.id === driver.id);
//     DB.drivers[driverIndex] = driver;
//     return driver;
// }

module.exports = {
    getAllDrivers
};