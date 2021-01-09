import axios from "axios";

export default {
    // Get book from google search 
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given _id
    getBook: function (_id) {
        return axios.get("/api/books/" + _id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // Deletes the book with the given _id
    deleteBook: function (_id) {
        return axios.delete("/api/books/" + _id);
    }

};