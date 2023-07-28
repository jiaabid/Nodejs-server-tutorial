const { addBook, updateBook, getBook, getBooks, deleteBook } = require("../controller/book.controller")

const router = require("express").Router()

router.post("/", addBook)
router.get("/", getBooks)
router.get("/:id", getBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

module.exports = router;