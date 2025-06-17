// // file: app.js
// desc: This file holds the implementation of MovieList class, event listers and creates a movies array based on Movie class.
// Author: Amina Aar
// Last modified: 17/06/2025
// version 1.0.0

// Initial movie data
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

// Add New Movie (Create)
function addClick() {
  console.log("Add button clicked!");
  // Get the form elements where the user inputs the movie details
  let formElements = document.getElementById("form-add").elements;
  // Extract user input values from the form
  let movieID = parseInt(formElements["movie-id"].value); //Convert the movie ID to a number
  let title = formElements["title"].value.trim(); // Get the movie title and remove any extra spaces
  let year = parseInt(formElements["year"].value); // // Convert the movie year to a number
  let rating = parseFloat(formElements["rating"].value); //Convert the rating to a decimal number
  // Check if all values are valid (not empty or incorrect types)
  if (!isNaN(movieID) && title && !isNaN(year) && !isNaN(rating)) {
    // Add the new movie to the MovieList instance
    movieList.add(movieID, title, year, rating);
    // Clear the form fields after successfully adding the movie
    formElements["movie-id"].value = "";
    formElements["title"].value = "";
    formElements["year"].value = "";
    formElements["rating"].value = "";
  }
}

// Refresh List Click Event
function refreshClick() {
  movieList.refresh();
}

// Sort A-Z Click Event
function a2zClick() {
  movieList.sortAtoZ();
}
// Sort Z-A Click Event
function z2aClick() {
  movieList.sortZtoA();
}
// Best Movies Click Event
function bestMoviesClick() {
  movieList.bestMovies();
}

// function searchClick() {
//   // get the text element from the dom
//   let formElements = document.getElementById("search-form").elements;
//   // get the text from input
//   let text = formElements["search-title"].value.trim();

//   //  Ensure only search results are cleared before displaying new results
//   document.getElementById("search-results-list").innerHTML = "";
//   //Run the search method.
//   movieList.searchByTitle(text);
// }

//Search by Title Click Event function
function searchClick() {
  // get the text element from the dom
  let formElements = document.getElementById("search-form").elements;
  // get the text from input
  let text = formElements["search-title"].value;
  // //Run the search method.
  movieList.searchByTitle(text);
}

// Search by ID Click Event
function searchByIDClick() {
  let id = document.getElementById("search-id").value;
  movieList.searchByID(id);
}
