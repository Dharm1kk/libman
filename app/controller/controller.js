const Book = require('../model/model.js');

exports.create = (req,res)=>{

    if(!req.body.title || !req.body.bookId){
        return res.status(400).send({
            message:"Book title and ID cannot be empty"
        });
    }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        bookId: req.body.bookId
    });

    book.save()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Book."
        });
    });
}