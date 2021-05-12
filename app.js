const express = require("express")
const bookBank = require("./bookBank")

const app = express();

app.get("/", (req, res) => {
const books = bookBank.list()
const html = `<!DOCTYPE html>
<html>
    <head>
        <title>Book</title>
    </head>
    <body>
        <header>Book List</header>
        <div>
            ${books.map(book => `
            <div>
                <span>${book.id}. </span><a href="/books/${book.id}">${book.title}</a>
            </div>`).join('')}
        </div>
    </body>
</html>`
res.send(html)
})

app.get('/books/:id', (req, res) => {
const id = req.params.id
const book = bookBank.find(id)
if(!book.id) {
    throw new Error('Not Found')
} else {
    const html = `<!DOCTYPE html>
<html>
    <head>
        <title>Books</title>
    </head>
    <body>
        <header>Book List</header>
        <div>
            <a href = "/">${book.title}</a>
        </div>
        ${book.content}
    </body>
</html>`
res.send(html)
}
}

)


const PORT = 3000
app.listen(PORT, ()=>{})