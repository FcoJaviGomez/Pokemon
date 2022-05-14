const expres = require('express');
const app = expres();

app.use(expres.static(__dirname + '/dist/api-pokemon'));
app.get('/*', function (req, res) {
    res.sendFile("index.html", { root: __dirname + '/dist/api-pokemon/' });
});

app.listen(process.env.PORT || 3000);