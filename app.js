const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});