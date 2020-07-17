let firstNameObj = {A:'Alpha', B:'Beta', C:'Cache', D:'Data', E:'Energy', F:'Function', G:'Glitch',
 H:'Half-life', I:'Ice', J:'Java', K:'Keystroke', L:'Logic', M:'Malware', N:'Nagware', O:'OS', 
 P:'Phishing', Q:'Quantum', R:'RAD', S:'Strike', T:'Trojan', U:'Ultraviolet', V:'Vanilla', W:'WiFi', 
 X:'Xerox', Y:'Y', Z:'Zero',}

let surnameObj = {A:'Analogue', B:'Bomb', C:'Catalyst', D:'Discharge', E:'Electron', F:'Faraday', 
G:'Gig', H:'Hacker', I:'IP', J:'Jabber', K:'Killer', L:'Lazer', M:'Mike', N:'n00b', O:'Overclock', 
P:'Payload', Q:'Quark', R:'Roy', S:'Spy', T:'T-Rex', U:'Unit', V:'Virus', W:'Worm', X:'X', Y:'Yob', 
Z:'Zombie',}


//FUNCTION TO CAPITALISE FIRST LETTER OF WORD
function cap(name){ 
    let splitName =  name.split('');
    splitName[0] = splitName[0].toUpperCase();
    let res = splitName.join('');
    return res;
}


//MAIN FUNCTION 
function aliasGen(firstName, lastName){

    let fName = cap(firstName);
    let lName = cap(lastName);
    let firstLetter = fName.charAt(0);
    let secondLetter = lName.charAt(0);
    let result, fNameResult, lNameResult;

    //CONDITION TO CHECK FIRST LETTERS EQUAL TRUE
    if((firstLetter >= 'A' && firstLetter <= 'Z') && (secondLetter >= 'A' && secondLetter <= 'Z')){
       
       for(let item in firstNameObj){
           if(item === firstLetter){
               fNameResult =  firstNameObj[item]; //ASSIGNS VALUE OF OBJECT TO VARIABLE
           }   
       }

       for(let item2 in surnameObj){
           if(item2 === secondLetter){
                lNameResult =  surnameObj[item2];
              
           }
           
       }
       result = `${fNameResult} ${lNameResult}`;
       return result;


    }else {
        return `Your name must start with a letter from A - Z.`;
    }

}
//TEST CODE HERE BY ENTERING YOUR NAME
console.log(aliasGen("mary", "stev"));
