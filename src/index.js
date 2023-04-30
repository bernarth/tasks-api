const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/tasks.routes');
const { port } = require('./config');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use((err, req, res, next) => {
  return res.status(400).json({
    message: err.message
  });
});

app.listen(port);
console.log(`server on port ${port}`);