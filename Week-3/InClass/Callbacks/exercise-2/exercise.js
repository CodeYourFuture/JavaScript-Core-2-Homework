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
const movies = [
  {
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

// create showMovies function
let allMovies = document.getElementById("all-movies");
let movieNumber = document.getElementById("movies-number");
let myMovies = function(){
  movies.forEach(function (movie){
    let pElement = document.createElement("p");
    // console.log(pElement)
    let quoteString = `${movie.title} directed by ${movie.director}`;
    
    allMovies.appendChild(pElement);
    pElement.innerHTML = quoteString;
    
    // return pElement;
    }
    )
    movieNumber.innerText = movies.length;
}
setTimeout(myMovies, 1000);


// create a new movie object for your favorite movie


let newMovie =  {
    title: "Pursuit of happiness",
    director: "Gabriele Muccino",
    type: "drama",
    haveWatched: true,
  }


// console.log(movies);

// create addMovies function
function addMovies(movie){
movies.push(movie);
let deleteEl = allMovies.querySelectorAll("p");
deleteEl.forEach((p, index) => index ?  allMovies.removeChild(p): NaN);
myMovies();
}
setTimeout(addMovies, 2000, newMovie)

// var down = document.getElementById("btn"); 


  // Create a break line element 
  var br = document.createElement("br");  
  function createForm() {
var form = document.createElement("form"); 
    form.setAttribute("method", "post"); 
    form.setAttribute("action", "submit"); 
  
    // Create an input element for title 
    var title = document.createElement("input"); 
    title.setAttribute("type", "text"); 
    title.setAttribute("name", "title"); 
    title.setAttribute("placeholder", "title"); 
    title.setAttribute("id", "title"); 
  
     // Create an input element for director 
     var director = document.createElement("input"); 
     director.setAttribute("type", "text"); 
     director.setAttribute("name", "director"); 
     director.setAttribute("placeholder", "director"); 
     director.setAttribute("id", "director"); 
  
     // Create an input element for type 
     var type = document.createElement("input"); 
     type.setAttribute("type", "text"); 
     type.setAttribute("name", "type"); 
     type.setAttribute("placeholder", "type"); 
     type.setAttribute("id", "type"); 
  
      // Create an input element for haveWatched 
      var haveWatched = document.createElement("input"); 
      haveWatched.setAttribute("type", "havewatched"); 
      haveWatched.setAttribute("name", "havewatched"); 
      haveWatched.setAttribute("placeholder", "havewatched"); 
      haveWatched.setAttribute("id", "havewatched"); 

        // create a submit button 
        var s = document.createElement("input"); 
        s.setAttribute("type", "Submit"); 
        s.setAttribute("value", "Submit"); 
          
        // Append the title input to the form 
        form.appendChild(title);  
          
        // Inserting a line break 
        form.appendChild(br.cloneNode());  
          
        // Append the director to the form 
        form.appendChild(director);  
        form.appendChild(br.cloneNode());  
          
        // Append the type to the form 
        form.appendChild(type);  
        form.appendChild(br.cloneNode());  
          
        // Append the haveWatched to the form 
        form.appendChild(haveWatched);  
        form.appendChild(br.cloneNode()); 
          
        // Append the submit button to the form 
        form.appendChild(s);  

        document.body.appendChild(form);
      
        let btn = document.querySelector("input:last-of-type");
        btn.addEventListener("click",(event) => {
          
          event.preventDefault();
          let title = document.getElementById("title");  
          let director =  document.getElementById("director");  
          let type = document.getElementById("type");  
          let havewatched = document.getElementById("havewatched");  
      
          let myNewMovie = {
            title: title.value,
            director: director.value,
            type: type.value,
            haveWatched: havewatched.value
          };
          console.log(myNewMovie);
          addMovies(myNewMovie);
        });
  }
  createForm();
  
  // let btn = document.querySelector("input:last-of-type");
  // btn.addEventListener("click",(event) => {
    
  //   event.preventDefault();
  //   let title = document.getElementById("title");  
  //   let director =  document.getElementById("director");  
  //   let type = document.getElementById("type");  
  //   let havewatched = document.getElementById("havewatched");  

  //   let myNewMovie = {
  //     title: title.value,
  //     director: director.value,
  //     type: type.value,
  //     haveWatched: havewatched.value
  //   };
  //   console.log(myNewMovie);
  //   addMovies(myNewMovie);
  // })
  
  
  
