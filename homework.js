// Episode 1
// prints out my name is Keith

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Episode 2
//prints out 3 - local variable supersedes global

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//Episode 3
//prints out 'Ducks', 'Dogs', 'Lions'  - local variable supersedes global

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Episode 4
// replaces Keith with Harvey - suspect 3 is Keith when outside var allSuspects.  

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//Episode 5
//Poirot overwrites Ace Ventura

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//Episode 6

// the murderer is rick.  printing out outerFunction 

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);



//Episode 7
//prints outs victims: john, alex, keith, rick and additional victim Tracy

var victimOne = 'John';
var victimTwo = 'Alex';
var victimThree = 'Keith';
var victimFour = 'Rick';

var allVictims = function() {
  console.log('Victims include: ' + victimOne + ', ' + victimTwo + ', ' + victimThree + ', ' + victimFour)
};

allVictims();
var victimFive = 'Tracy'
console.log( 'Victim five is:' + victimFive );





