const mailRouter = require('./mail-router.js');

const route = (app) => {
    app.use('/mail', mailRouter);

    // app.all('*', (req, res) => {
    //     if (req.method === 'PATCH') {
    //         res.status(405).json();
    //     }
    //     res.status(404).json();
    // });
}

module.exports = route;