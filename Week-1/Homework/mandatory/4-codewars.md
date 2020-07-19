## Reading

- [Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)

## CodeWars Exercises

Complete the following CodeWars exercises. Go to the webpages below and follow the instructions there.

Click "ATTEMPT" to test your solution.

Exercises:

- [Training JS #5: Basic data types--Object](https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript)
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

- [Welcome!](https://www.codewars.com/kata/welcome/train/javascript)
function greet(language) {
	var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
  for (var key in database) {
    if(key == language) {
      return database[key];
    }
  }
  return database['english'];
}

function greet(language) {
  return languages[language] || languages['english'];
}

var languages = {
  'english': 'Welcome',
  'czech': 'Vitejte',
  'danish': 'Velkomst',
  'dutch': 'Welkom',
  'estonian': 'Tere tulemast',
  'finnish': 'Tervetuloa',
  'flemish': 'Welgekomen',
  'french': 'Bienvenue',
  'german': 'Willkommen',
  'irish': 'Failte',
  'italian': 'Benvenuto',
  'latvian': 'Gaidits',
  'lithuanian': 'Laukiamas',
  'polish': 'Witamy',
  'spanish': 'Bienvenido',
  'swedish': 'Valkommen',
  'welsh': 'Croeso'
}

- [Crash Override](https://www.codewars.com/kata/crash-override/train/javascript)


- [Job Matching #1](https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript)
- [Split the Bill](https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript)
