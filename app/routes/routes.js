module.exports = (app)=>{
    const book = require('../controller/controller.js');

    app.post('/book',book.create);

}