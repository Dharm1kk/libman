const Book = require('../model/model.js');

exports.create = (req, res) => {

    if (!req.body.title || !req.body.bookId) {
        return res.status(400).send({
            message: "Book title and ID cannot be empty"
        });
    }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        bookId: req.body.bookId
    });

    book.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Book."
            });
        });
};

exports.findAll = (req, res) => {
    Book.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findOne = (req, res) => {
    Book.findOne({ bookId: Number(req.params.bookId) }) // ✅ fix
        .then(book => {
            if (!book) {
                return res.status(404).send({ // ✅ fix
                    message: "Book not found with that ID"
                });
            }
            res.send(book);
        })
        .catch(err => {
            res.status(500).send({
                message: "Cannot retrieve book with that ID"
            });
        });
};

exports.delete = (req, res) => {
    Book.findOneAndDelete({ bookId: Number(req.params.bookId) })
        .then(book => {
            if (!book) {
                return res.status(404).send({
                    message: "Book not found with that ID"
                });
            }

            res.send({ // ✅ IMPORTANT FIX
                message: "Book deleted successfully"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting book"
            });
        });
};