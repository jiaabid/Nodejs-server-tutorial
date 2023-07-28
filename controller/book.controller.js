const { bookModel } = require("../model/index.model")
let errCode = 500

//add new book
module.exports.addBook = async (req, res) => {
    try {
        //check if the book exist
        const existing = await bookModel.findOne({
            where: {
                name: req.body.name
            }
        })
        if (existing) {
            errCode = 400;
            throw new Error("Already Exist!")
        }

        //create new entry
        const bookSnap = await bookModel.create(req.body)
        if (!bookSnap) {
            throw new Error("Failed to create a book entry.")
        }
        return res.status(201).json({
            message: "Book entry created successfully!",
            data: bookSnap
        })
    } catch (err) {
        return res.status(errCode).json({
            message: err.message,
            error: err
        })
    }
}

//get all books
module.exports.getBooks = async (req, res) => {
    try {
        const bookSnap = await bookModel.findAll()
        return res.status(200).json({
            message: "Book entry created successfully!",
            data: bookSnap
        })
    } catch (err) {
        return res.status(errCode).json({
            message: err.message,
            error: err
        })
    }
}

//get one book
module.exports.getBook = async (req, res) => {
    try {
        const bookSnap = await bookModel.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!bookSnap) {
            errCode = 404;
            throw new Error("Not Found!")
        }
        return res.status(200).json({
            message: "Book entry created successfully!",
            data: bookSnap
        })
    } catch (err) {
        return res.status(errCode).json({
            message: err.message,
            error: err
        })
    }
}

//update a book
module.exports.updateBook = async (req, res) => {
    try {
        const bookSnap = await bookModel.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!bookSnap) {
            errCode = 404;
            throw new Error("Not Found!")
        }
        //iterate the req.body and only update the provided key
        Object.keys(req.body).forEach(key => {
            bookSnap['dataValues'][key] = req.body[key]
        })
        const updatedSnap = await bookModel.update(bookSnap['dataValues'], {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            message: "Book entry updated successfully!",
            data: updatedSnap
        })
    } catch (err) {
        return res.status(errCode).json({
            message: err.message,
            error: err
        })
    }
}

//delete book
module.exports.deleteBook = async (req, res) => {
    try {
        const bookSnap = await bookModel.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!bookSnap) {
            errCode = 404;
            throw new Error("Not Found!")
        }
       
        return res.status(200).json({
            message: "Book entry deleted successfully!",
            data: []
        })
    } catch (err) {
        return res.status(errCode).json({
            message: err.message,
            error: err
        })
    }
}

