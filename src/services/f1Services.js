const f1DB = require('../database/f1');

const getAllDrivers = () => {
    return f1DB.getAllDrivers();
}

const getDriverById = async (req, res) => {
    const driverId = f1DB.getDriverById(req.params.driverId);
    res.json(driverId);
}

const createDriver = async (req, res) => {
    const createdDriver = f1DB.createDriver(req.params.driverId);
    res.json(createdDriver);
}

const updateDriver = async (req, res) => {
    const updatedDriver = f1DB.updateDriver(req.params.driverId);
    res.json(updatedDriver);
}

const deleteDriver = async (req, res) => {
    const deletedDriver = f1DB.deleteDriver(req.params.driverId);
    res.json(deletedDriver);
}

module.exports = {
    getAllDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver
}