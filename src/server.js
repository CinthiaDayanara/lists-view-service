const express = require('express');
const dotenv = require('dotenv');
const listRoutes = require('./routes/listsViewRoutes');

dotenv.config();

const app = express();

app.use(express.json());  // ✅ Middleware para procesar JSON

app.use('/api', listRoutes);



const PORT = process.env.PORT || 5002;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});


