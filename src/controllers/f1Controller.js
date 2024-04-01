const f1Service = require('../services/f1Services');

const getAllDrivers = (req, res) => {
    const allDrivers = f1Service.getAllDrivers();
    res.send({ status : 200, data : allDrivers});
}

const getDriverById = (req, res) => {
    const driverId = f1Service.getDriverById(req.params.driverId);
    res.send(`Piloto por ID`);
}

const createDriver = (req, res) => {
    const createdDriver = f1Service.createDriver(req.params.driverId);
    res.send(`Crear un piloto de F1 `);
}

const updateDriver = (req, res) => {
    const updatedDriver = f1Service.updateDriver(req.params.driverId)
    res.send(`Actualizar un piloto de F1 con id X`);
}

const deleteDriver = (req, res) => {
    const deleteDriver = f1Service.deleteDriver(req.params.driverId);
    res.send(`Eliminar un piloto de F1 con id X`);
}

module.exports = {
    getAllDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver
}