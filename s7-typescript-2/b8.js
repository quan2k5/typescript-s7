"use strict";
let book = {
    title: 'Conan',
    author: 'Lê Anh Quân',
    price: 250,
};
console.log(printBook(book));
updateBook(book);
console.log(printBook(book));
function printBook(printbk) {
    return printbk;
}
function updateBook(book) {
    book.title = 'Doraemon';
    book.author = 'Quân lê';
    book.price = 160;
}
