const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usuarioRouter = require('./routes/usuario'); 
const saldoRouter = require('./routes/saldo'); 
const movimentacaoRouter = require('./routes/movimentacao'); 

const app = express();
const port = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/usuario', usuarioRouter);
app.use('/saldo', saldoRouter);
app.use('/movimentacao', movimentacaoRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

module.exports = app;
