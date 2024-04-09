let  book :{title:string,author :string,price :number}={
    title:'Conan',
    author:'Lê Anh Quân',
    price:250,
}
console.log(printBook(book));
updateBook(book);
console.log(printBook(book));
function printBook(printbk :object) :object{
    return printbk;
}
function updateBook(book:{ title: string, author: string, price: number }){
    book.title='Doraemon';
    book.author='Quân lê';
    book.price=160;
}

