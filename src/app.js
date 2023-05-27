import express from "express";

const app = express();

app.use(express.json());

const books = [
    {id: 1, 'title': "Harry Potter: Philosopher's stone"},
    {id: 1, 'title': "Harry Potter: Chamber of Secrets"},
    {id: 2, 'title': "Harry Potter: Prisioner of Azkaban"},
    {id: 6, 'title': "Harry Potter: the Blobet of Fire"},
    {id: 3, 'title': "Harry Potter: the Order of the Phoenix"},
    {id: 4, 'title': "Harry Potter: the Half-Blood Prince"},
    {id: 5, 'title': "Harry Potter: the Deatbly Hallows"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');

})

app.get('/books', (req, res) => {
    res.status(200).json(books);
})

app.get('/books/:id', (req, res) => {
    let index = searchBook(req.params.id);
    res.json(books[index]);
})

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Book added successfully')
})

app.put('/books/:id', (req, res) => {
    let index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = searchBook(id);
    books.splice(index, 1);
    res.send(`Book ${id} removed successfully`);
})

function searchBook(id) {
    return books.findIndex(book => book.id == id);
}

export default app;