app.get('route', function(req,res){
    res.send('Hello world');
});

app.use('/healthcheck', require('healthcheck.routes'));