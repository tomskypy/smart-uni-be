var express     = require('express'),
    app         = express(),
    createError = require('http-errors'),
    indexRouter = require('./web/routes/index'),
    getRouter   = require('./web/routes/get'),
    join        = require('path').join;

const PORT = process.env.PORT || 5000

app.engine('html', require('ejs').renderFile);

app.set('views', join(__dirname, 'web', 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, 'web', 'public')));

app.use('/', indexRouter);
app.use('/get', getRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))