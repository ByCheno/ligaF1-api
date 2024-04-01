const express = require('express');
const router = express.Router();
const f1Controller = require('../../controllers/f1Controller');

router
    .get("/", f1Controller.getAllDrivers)
    .get("/:driverId", f1Controller.getDriverById)

    .post("/:createDriver", f1Controller.createDriver)

    .patch("/:updateDriver", f1Controller.updateDriver)

    .delete("/:deleteDriver", f1Controller.deleteDriver);


module.exports = router;