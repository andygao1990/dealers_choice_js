const data = [
    {id: 1, title: 'Book 1', content: 'The 1st book!'},
    {id: 2, title: 'Book 2', content: 'The 2nd book!'},
    {id: 3, title: 'Book 3', content: 'The 3rd book!'},
    {id: 4, title: 'Book 4', content: 'The 4th book!'},
    {id: 5, title: 'Book 5', content: 'The 5th book!'},
    {id: 6, title: 'Book 6', content: 'The 6th book!'},
    {id: 7, title: 'Book 7', content: 'The 7th book!'}
]

const list = () => {
    return [...data]
}

const find = (id) => {
    const book = data.find(book => book.id === +id)
    return {...book}
}

module.exports = {list: list, find: find}