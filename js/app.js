// // file: app.js
// desc: This file holds the implementation of MovieList class, event listers and creates a movies array based on Movie class.
// Author: Amina Aar
// Last modified: 17/06/2025
// version 1.0.0

// Initial move data
let initMovies = [
  new Movie(1, "The Shawshank Redemption", 1994, 9.3),
  new Movie(2, "The Godfather", 1972, 9.2),
  new Movie(3, "The Godfather: Part II", 1974, 9.0),
  new Movie(4, "The Dark Knight", 2008, 9.1),
  new Movie(5, "Forrest Gump", 1994, 8.8),
  new Movie(6, "Inception", 2010, 8.8),
  new Movie(7, "The Matrix", 1999, 8.7),
  new Movie(8, "The Lord of the Rings: The Return of the King", 2003, 9.0),
  new Movie(9, "Interstellar", 2014, 8.6),
  new Movie(10, "The Last Starfighter", 1981, 6.8),
];

// Create an instance of the MovieList class
let movieList = new MovieList("movieList", initMovies);
console.log(movieList);

// Event Functions

//  Search by Title Click Event
function searchClick() {
  // get the text element from the dom
  let formElements = document.getElementById("search-form").elements;
  // get the text from input
  let text = formElements["search-title"].value;
  //Run the search method.
  movieList.searchByTitle(text);
}
// Search by ID Click Event
function searchByIDClick() {
  let id = document.getElementById("search-id").value;
  movieList.searchByID(id);
}
