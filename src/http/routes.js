const db = require('../services/mysql');
const routes = (server) => {
    server.get('/categoria', (req, res, next) => {
        db.categories().all().then(categories => {
                res.send(categories);
                next()
            }).catch(error => {
                console.log(error);
                next();
            });
    });

    server.post('/categoria', (req, res, next) => {
        const {name} = req.params
        res.send(name);
        next()
    });

    // server.delete('/categoria', (req, res, next) => {
    //     res.send();
    //     next()
    // });

    // server.put('/categoria', (req, res, next) => {
    //     res.send();
    //     next()
    // });

    server.get('/', (req, res, next) => {
        res.send('enjoy the silence!!!')
        next()
    });
}

module.exports = routes