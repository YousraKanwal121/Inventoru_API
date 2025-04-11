const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventoryRoutes');

app.use(express.json());
app.use('/api', inventoryRoutes);

// Create Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}...`);
});