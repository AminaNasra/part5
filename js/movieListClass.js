// The MovieList Class
// class has 2 attributes and some methods
// Author: Amina Aar
// Last modified: 16/06/2025
// version 1.0.0
class MovieList {
  constructor(rootId, movies) {
    this.rootId = rootId; //the html id of where the list is to be shown.
    this.movieList = movies; // The array of movies to be displayed.
    this.refresh(); // Display initial movies
  }
  // movieRow- Generate one row of the movieList
  movieRow(movieID, title, year, rating) {
    // get the parent element
    const rootElement = document.getElementById(this.rootId);
    // Create a new li
    const row = document.createElement("li");
    // Create the text and add the class to the new li.
    row.classList.add("row");
    // Ensure rating always has one decimal place
    const formattedRating = rating.toFixed(1);
    row.textContent = `#${movieID} - ${title} (${year}) | Rating: ${formattedRating}`;
    // Add the new element to DOM.
    rootElement.appendChild(row);
  }

  //genMovieList() generates all rows of the movies list for the display
  genMovieList() {
    // Loop through the movieList.
    for (let i = 0; i < this.movieList.length; i++) {
      let movie = this.movieList[i];
      // Call the movieRow function to generate the row.
      this.movieRow(movie.movieID, movie.title, movie.year, movie.rating);
    }
  }

  // removeElements - Remove all list elements from the DOM
  removeElements() {
    const rootElement = document.getElementById(this.rootId);
    // get all elemnts with the class name of row
    const childNodes = document.getElementsByClassName("row");
    // how many children do we have
    const len = childNodes.length - 1;
    // Loop backwards to remove elements safely
    for (let i = len; i >= 0; i--) {
      // get the last element in the array
      const child = childNodes[i];
      // remove the element from the dom
      rootElement.removeChild(child);
    }
  }
  // refresh  // Refresh method - updates the list view with current data
  // Refresh function
  refresh() {
    // call remove elements
    this.removeElements();
    // generate the movie list
    this.genMovieList();
  }
  // add- Add a new movie in the list
  // Add function - add a new movie
  add(movieID, title, year, rating) {
    // Add a new movie to the end of the list
    this.movieList.push(new Movie(movieID, title, year, rating));
    this.refresh();
  }

  //genMovieSearchList - Generate a movie list based on search results
  genMovieSearchListTitle(list) {
    // loop through the list
    for (let i = 0; i < list.length; i++) {
      let movie = list[i];
      // call the movieRow function to generate a row
      this.movieRow(movie.movieID, movie.title, movie.year, movie.rating);
    }
  }
  genMovieSearchList(list) {
    const resultElement = document.getElementById("search-results-list"); // Ensure results go in the right section
    // Clear previous search results before displaying new ones
    resultElement.innerHTML = "";
    // Loop through the search results and add each movie
    for (let i = 0; i < list.length; i++) {
      let movie = list[i];
      const row = document.createElement("li");
      row.classList.add("row");
      row.textContent = `#${movie.movieID} - ${movie.title} (${movie.year}) | Rating: ${movie.rating}`;
      resultElement.appendChild(row);
    }
  }

  // searchByTitle - search the movies list based on search term againist the title, then display results
  // Search movies by partial title and display results
  searchByTitle(nameString) {
    let shortList = [];

    // Loop through movieList to find matches
    for (let i = 0; i < this.movieList.length; i++) {
      let movie = this.movieList[i];

      // If the title contains the search term, add to shortList
      if (movie.title.toLowerCase().includes(nameString.toLowerCase())) {
        shortList.push(movie);
      }
    }
    this.removeElements();
    if (shortList.length > 0) {
      this.genMovieSearchListTitle(shortList); // Updates `#movieList`
    } else {
      //  Ensure "No result" appears in `#movieList`
      const rootElement = document.getElementById("movieList");
      const message = document.createElement("li");
      message.classList.add("row");
      message.textContent = "No result";
      rootElement.appendChild(message);
    }
  }

  searchByID(movieID) {
    let shortList = [];
    for (let i = 0; i < this.movieList.length; i++) {
      let movie = this.movieList[i];
      if (movie.movieID === parseInt(movieID)) {
        shortList.push(movie);
      }
    }
    // Clear only search results, NOT the main movie list
    document.getElementById("search-results-list").innerHTML = "";

    // Display search results
    if (shortList.length > 0) {
      this.genMovieSearchList(shortList);
    } else {
      const rootElement = document.getElementById("search-results-list");
      const message = document.createElement("li");
      message.classList.add("row");
      message.textContent = "0 result";
      rootElement.appendChild(message);
    }
  }

  // sortA2Z - sort the list in ascending order display the movies
  sortAtoZ() {
    this.movieList.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    this.refresh();
  }
  // sortZtoA- sort the list in descending order display the movies
  sortZtoA() {
    this.movieList.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
    this.refresh();
  }

  // bestMovies- sort the  list by rating in descending order (highest-rated first), then display results
  bestMovies() {
    this.movieList.sort(function (a, b) {
      return b.rating - a.rating;
    });
    this.refresh();
  }
}
