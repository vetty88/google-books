
import http from "../services/httpService";

export default {
    // Get book from google search 
  getGoogleSearchBooks: function(q) {
    return http.get("/api/google", {
      params: { q: "title:" + q }
    });
  },
  // Gets all books
  getSavedBooks: function() {
    return http.get("/api//books");
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return http.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: function(savedBooks) {
    return http.post('/api/books', savedBooks);
  };