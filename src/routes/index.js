const test = require('./test');

module.exports = (app) => {
    app.get('/api/test', test);
}