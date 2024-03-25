import http from './httpServices';
const apiEndPoint="http://localhost:3000/api/books";
export function getBooks() {
    return http.get(apiEndPoint);
}
export function getBook(id){
    return http.get(apiEndPoint)
}
// export function addBook(book) {
//     return http.post(apiEndPoint,book);
// }