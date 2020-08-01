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
//document.body.style.backgroundColor = 'black';
const movies = [
	{
		title       : 'Color Out of Space',
		director    : 'Richard Stanley',
		type        : 'sci-fi',
		haveWatched : true
	},
	{
		title       : 'A Twelve-Year Night',
		director    : 'Álvaro Brechner',
		type        : 'horror',
		haveWatched : false
	},
	{
		title       : 'The Whistlers',
		director    : 'Corneliu Porumboiu',
		type        : 'comedy',
		haveWatched : true
	},
	{
		title       : 'The Invisible Man',
		director    : 'Leigh Whannell',
		type        : 'horror',
		haveWatched : false
	}
];
/*
function showMovies(movie) {
	movie.forEach((item) => {
		let movieDiv = document.querySelector('#all-movies');
		let theMovie = document.createElement('p');
		movieDiv.appendChild(theMovie);
		let currentMovie = document.createTextNode(item.title + ' by : ' + item.director);
		theMovie.appendChild(currentMovie);
	});

	document.querySelector('#movies-number').innerText = movie.length;
}
*/
//showMovies(movies);

let myMovies = {
	title       : 'The Seven Samurai',
	director    : 'Akira Kurosawa',
	type        : 'horror',
	haveWatched : true
};

function addMovie(movie) {
	movies.push(movie);
}

function showMovies(movie) {
	movie.forEach((item) => {
		let movieDiv = document.querySelector('#all-movies');
		let theMovie = document.createElement('p');
		movieDiv.appendChild(theMovie);
		let currentMovie = document.createTextNode(item.title + ' by : ' + item.director);
		setTimeout(function() {
			theMovie.appendChild(currentMovie);
		}, 1000);
	});
	document.querySelector('#movies-number').innerText = movie.length;
}

setTimeout(addMovie(myMovies), 2000);
showMovies(movies);
/*
Create a form anywhere on your page.The form should have
	- 4 input text fields, one for each property of your movie object
		- a "save" button.
When the button is clicked
	- The field values should be used to create a new movie object literal
		- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1 - 3*/

let movieForm = document.createElement('FORM');
movieForm.setAttribute('id', 'myForm');
document.body.appendChild(movieForm);
document.querySelector('#myForm').style.backgroundColor = 'aqua';
document.querySelector('#myForm').style.display = 'flex';

let titelLabel = document.createElement('label');
titelLabel.innerText = 'Enter Movie titel  :  ';
document.querySelector('#myForm').appendChild(titelLabel);

let titelInput = document.createElement('INPUT');
titelInput.setAttribute('type', 'text');
titelInput.setAttribute('id', 'movieTitel');
document.querySelector('#myForm').appendChild(titelInput);

let breakLine = document.createElement('br');
document.querySelector('#myForm').appendChild(breakLine);

let dirlabel = document.createElement('label');
dirlabel.innerText = 'Enter Movie Director:';
document.querySelector('#myForm').appendChild(dirlabel);

let dirInput = document.createElement('INPUT');
dirInput.setAttribute('type', 'text');
dirInput.setAttribute('id', 'dir');
document.querySelector('#myForm').appendChild(dirInput);

let breakLine1 = document.createElement('br');
document.querySelector('#myForm').appendChild(breakLine1);

let typeLabel = document.createElement('label');
typeLabel.innerText = 'Enter Movie Type            :           ';
document.querySelector('#myForm').appendChild(typeLabel);

let typeInput = document.createElement('INPUT');
typeInput.setAttribute('type', 'text');
typeInput.setAttribute('id', 'movieType');
document.querySelector('#myForm').appendChild(typeInput);

let breakLine3 = document.createElement('br');
document.querySelector('#myForm').appendChild(breakLine3);

let haveWatchLabel = document.createElement('label');
haveWatchLabel.innerText = 'Select if you have Watched the Movie : ';
document.querySelector('#myForm').appendChild(haveWatchLabel);

let watchOption = document.createElement('input');
watchOption.setAttribute('type', 'checkbox');
watchOption.setAttribute('id', 'movieWatched');
document.querySelector('#myForm').appendChild(watchOption);

let breakLine4 = document.createElement('br');
document.querySelector('#myForm').appendChild(breakLine4);
let saveButton = document.createElement('button');

saveButton.setAttribute('id', 'saveButton');
var butonText = document.createTextNode('Save');
saveButton.appendChild(butonText);
document.querySelector('#myForm').appendChild(saveButton);

let submitButton = document.querySelector('#saveButton');
document.querySelector('#saveButton').style.backgroundColor = 'lightblue';
submitButton.addEventListener('click', validate);
let valid = true;
//let titleValue =
document.document.querySelector('#movieTitel').style.backgroundColor = 'green';

let directorValue = document.querySelector('#movieDirector');
directorValue.style.backgroundColor = 'transparent';

let typeValue = document.querySelector('#movieType');
typeValue.style.backgroundColor = 'transparent';

let watchValue = document.querySelector('#movieWatched');
watchValue.style.backgroundColor = 'transparent';

function validate() {
	let newMovieTitle = document.querySelector('#movieTitel').value;

	let newMovieDirector = document.querySelector('#dir').value;

	let newMoviesTtype = document.querySelector('#movieType').value;
	let newMovieWatched = true;
	if (document.querySelector('#movieWatched').value !== 'on') {
		newMovieWatched = false;
	}

	let newVideo = {
		title       : newMovieTitle,
		director    : newMovieDirector,
		type        : newMoviesTtype,
		haveWatched : newMovieWatched
	};

	//alert(newVideo.title + ' ' + newVideo.director + ' ' + newVideo.type + ' ' + newVideo.haveWatched);
	//movies[length - 1] = newVideo;
	alert(movies);
	showMovies(movies);

	// Blank out (make empty) all the text fields
	titleValue.value = '';
	typeValue.value = '';
	watchValue.value = '';
}
