/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [{
        title: "Color Out of Space",
        director: "Richard Stanley",
        type: "sci-fi",
        haveWatched: true,
    },
    {
        title: "A Twelve-Year Night",
        director: "Álvaro Brechner",
        type: "horror",
        haveWatched: false,
    },
    {
        title: "The Whistlers",
        director: "Corneliu Porumboiu",
        type: "comedy",
        haveWatched: true,
    },
    {
        title: "The Invisible Man",
        director: "Leigh Whannell",
        type: "horror",
        haveWatched: false,
    },
];

////////////////////////////////////////////////////////////
// Task-1 ; create showMovies function

function showMovies() {
    let divAllMovies = document.querySelector("#all-movies");
    let spanMoviesNumberEl = document.querySelector("#movies-number");
    console.log(divAllMovies);
    console.log(spanMoviesNumberEl);

    movies.forEach(movie => {
        let newPEl = document.createElement("p");
        console.log(newPEl);
        newPEl.textContent = `${movie.title}-${movie.director}`;
        divAllMovies.appendChild(newPEl);
        spanMoviesNumberEl.innerText = movies.length;
    });


}

// create a new movie object for your favorite movie

movies[4] = {
    title: "Annihilation",
    director: "Alex Garland",
    type: "Science Fiction",
    haveWatched: true,
}

//////////////////////////////////////////////////////////////
// Task-2 amend the showMovies with setTimeout to 1 second.

<<<<<<< HEAD
 setTimeout (showMovies, 1000);
||||||| merged common ancestors
setTimeout (function(){
  showMovies();
}, 1000);
=======
setTimeout(function() {
    showMovies();
}, 1000);
>>>>>>> b154b4b6cfdca7b5286d93b8688353e3c0401876

// create addMovies function
 let myMovieOb = {
  title: "The Martian",
  director: "Ridley Scott",
  type: "Science Fiction",
  haveWatched: true,
 }

function addMovies(x){
   setTimeout(function(){
     movies.push(x)
   }, 3000)
let myMovieOb = {
    title: "The Martian",
    director: "Ridley Scott",
    type: "Science Fiction",
    haveWatched: true,
}

function addMovies() {
    setTimeout(function() {
        movies[5] = myMovieOb;
        showMovies();
    }, 2000)

}
addMovies(myMovieOb);
// setTimeout(addMovies(myMovieOb), 3000)
//////////////////////////////////////////////////////////////
//Task-3 Callbacks,



///////////////////////////////////////////////////////////////
// Task 4 - **Extra**

let bodyEl = document.querySelector("body");
let newFormEl = document.createElement("form");
newFormEl.className = "new-form";

let label1 = document.createElement("label");
label1.innerHTML = `movie title`;
label1.for = "mTitle";
let inputEl1 = document.createElement("input");
inputEl1.type = "text";
inputEl1.for = "mTitle";

newFormEl.appendChild(label1);
newFormEl.appendChild(inputEl1);

bodyEl.appendChild(newFormEl);
let scriptEl = document.getElementsByTagName("script");
bodyEl.lastChild = scriptEl;

let label2 = document.createElement("label");
label2.innerHTML = `movie director`;
label2.for = "mDirector";
let inputEl2 = document.createElement("input");
inputEl2.type = "text";
inputEl2.for = "mDirector";

newFormEl.appendChild(label2);
newFormEl.appendChild(inputEl2);

let label3 = document.createElement("label");
label3.innerHTML = `movie type`;
label3.for = "mType";
let inputEl3 = document.createElement("input");
inputEl3.type = "text";
inputEl3.for = "mType";

newFormEl.appendChild(label3);
newFormEl.appendChild(inputEl3);

let label4 = document.createElement("label");
label4.innerHTML = `having watched`;
label4.for = "mHaveWatched";
let inputEl4 = document.createElement("input");
inputEl4.type = "text";
inputEl4.for = "mHaveWatched";

newFormEl.appendChild(label4);
newFormEl.appendChild(inputEl4);

let newButtonEl = document.createElement("button");
newButtonEl.type = "button";
newButtonEl.textContent = "Save";
newFormEl.appendChild(newButtonEl);

////////////////////////////////////////////////////////////
// Function with "click";

newButtonEl.addEventListener("click", addNewMovie);

function addNewMovie(movie) {
    movies.title = movie.title;
    movies = movies + movie;
}