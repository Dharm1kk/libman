module.exports = (app)=>{
    const book = require('../controller/controller.js');

    app.post('/book',book.create);
    app.get('/book/find',book.findAll);
    app.get('/book/find/:bookId',book.findOne);   
    app.delete('/book/delete/:bookId',book.delete);
}