/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

setTimeout(function() {
	document.body.style.backgroundColor = 'red';
}, 5000);

colors = [
	'#007bff',
	'#6610f2',
	' #6f42c1',
	'#e83e8c',
	'#dc3545',
	'#fd7e14',
	'#ffc107',
	'#28a745',
	'#20c997',
	'#17a2b8',
	'#fff',
	'#6c757d',
	'#343a40',
	'#007bff',
	'#6c757d',
	'#28a745',
	'#17a2b8',
	'#ffc107',
	'#dc3545',
	'#f8f9fa',
	'#343a40'
];

var index = 0;
setInterval(function() {
	document.body.style.backgroundColor = colors[index];
	index++;
}, 5000);
