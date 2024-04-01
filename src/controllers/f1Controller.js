// Importar el servicio de f1
const f1Service = require('../services/f1Services');

const getAllDrivers = (req, res) => {
    // Todos los pilotos de F1
    const allDrivers = f1Service.getAllDrivers();
    res.send({ status : 200, data : allDrivers});
}

const getDriverById = (req, res) => {
    // Se necesita el id del piloto que quieres mostrar
    const driverId = f1Service.getDriverById(req.params.driverId);
    res.send(`Piloto por ID`);
}

const createDriver = (req, res) => {
    // Se necesita los datos del piloto a crear
    const createdDriver = f1Service.createDriver(req.body);
    res.send(`Crear un piloto de F1 `);
}

const updateDriver = (req, res) => {
    // Se necesita tanto el id del piloto como los datos a actualizar
    const updatedDriver = f1Service.updateDriver(req.body, req.params.driverId)
    res.send(`Actualizar un piloto de F1 con id X`);
}

const deleteDriver = (req, res) => {
    // Se necesita el id del piloto a eliminar
    const deleteDriver = f1Service.deleteDriver(req.params.driverId);
    res.send(`Eliminar un piloto de F1 con id X`);
}


// Exportar todos los métodos
module.exports = {
    getAllDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver
}