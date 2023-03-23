const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración de body-parser para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Ruta para manejar el evento de webhook
app.post('/webhook', (req, res) => {
  // Extraer los datos de la solicitud
  const eventData = req.body;
  
  // Procesar los datos del evento
  console.log(`Evento ${eventData.event} recibido en ${eventData.timestamp}:`);
  console.log(eventData.data);

  // Responder con un código HTTP 200 OK para indicar que el evento se procesó correctamente
  res.sendStatus(200);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
