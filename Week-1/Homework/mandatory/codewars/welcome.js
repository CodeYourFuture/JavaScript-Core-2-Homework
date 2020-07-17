let message = {
    Punjabi: 'Aoo ji',
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
  
  
  
  function greet(language) {
      for(let item in message){
          //console.log(message[item]);
          if(message[language] === undefined){
            return message.english;
          }else {
           
            return message[language];
          }
        
          
          
  
      }
  };
  
  //console.log();
  console.log(greet("wesh"));