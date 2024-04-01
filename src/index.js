const express = require('express');
const v1Routes = require('./v1/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', v1Routes);

app.listen(port, () => {
    console.log(`Cheno va a ir como un 🚀 en la carrera`);
});
