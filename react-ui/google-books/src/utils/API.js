
import http from "../services/httpService";

export default {
    // Get book from google search 
  getGoogleSearchBooks: function(q) {
    return http.get("/api/google", {
      params: { q: "title:" + q }
    });
  },
  // Gets all books
  getBooks: function() {
    return http.get("/api//books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return http.get('/api/books/' + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return http.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: function(savedBooks) {
    return http.post('/api/books', savedBooks);
  }
  (response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  })
}