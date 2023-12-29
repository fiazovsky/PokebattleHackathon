var internals = {}; // internal state
export const externals = {}; // external api

let question = [{
  question: "For which console were the first Pokemon games?",
  anwser : ["Gameboy" , "Playstation" , "Von Neumann Machine" , "Mac" ]
},{
  question: "Who travels with Ash on his journey?",
  anwser : ["Misty and Brock" , "Mário and Margarida " , "Zuka and Aidos" , "Rúben and Claudia" ]
},
{
  question: "What is the name of the nurse in Pokemon?",
  anwser : ["Nurse Joy " , "Nurse Nozk" , "Nurse Mariana " , "Nurse Zuka" ]
},
{
  question: "What is Ash's surname?",
  anwser : ["Ketchum" , "Ketchup" , "Catsup" , "Kapturem " ]
},
{
  question: "Who does Charmander evolve into?",
  anwser : ["Charmeleon","Chorizo","Charizard","Camellia"]
},
{
  question: "Who's the professor Ash receives his Pikachu from?",
  anwser : ["Professor Oak ","Professor Nozk","Professor Gary ","Professor Bob"]
},
{
  question: "What evolves into Arbok?",
  anwser : ["Ekans ","Python ","Snake","Kobra"]
},
{
  question: "Who wants to be the best Pokemon Master ever?",
  anwser : ["Ash","Nozk","Mário","Mike "]
},
{
  question: "Who is the talking Pokemon in Team Rocket",
  anwser : ["Meowth","Zubat","James","Jesse"]
},
{
  question: "Who is #1 in the Pokedex?",
  anwser : ["Bulbasaur","Charizard ","Pikachu","Golbat"]
},
{
  question: "Who uses the Transform move to become a copy of its opponent?",
  anwser : ["Ditto","Abra","Caterpie","CSS"]
},
{
  question: "What color is the R on the Team Rocket costume?",
  anwser : ["Red ","Blue ","Purple ","Green"]
},
{
  question: "What kind of Pokemon is Rattata?",
  anwser : ["Normal ","Fire","Rock ","Grass"]
},
{
  question: "What type of Pokemon is Pikachu?",
  anwser : ["Electric","Water","Fire","A Rat"]
},
{
  question: "Which Pokémon appears on the cover of Pokémon Yellow?",
  anwser : ["Pikachu ","Charmander ","Squirtle","Bulbasaur"]
},
{
  question: "What is the First wild Pokemon that Ash catches on his journey?",
  anwser : ["Caterpie","Pikachu ","Charmeleon","Charizard"]
},
{
  question: "How are Gary Oak & Professor Oak related?",
  anwser : ["Grandfather and Grandson","Father and Son","2nd Degree Cousins","Brothers"]
},
{
  question: "Wich one of these Pokemon is Part of Gen 1?",
  anwser : ["Mew","Heracross","Totodile","Hoothoot"]
},
{
  question: "How many members are part of the Squirtle Squad?",
  anwser : ["5","4","6","3"]
},{
  question: "Where does Ash start his journey in?",
  anwser : ["Pallet Town","Petalburg City ","Littleroot Town ","Code for All"]
},{
  question: "In what rank did ash finish the Indigo league?",
  anwser : ["Top 16","Top 8","Top 6","Top 2"]
},{
  question: "Wich of these pokemon couldnt Ash capture?",
  anwser : ["Pidgey ","Tauros","Primeape","Krabby"]
},{
  question: "Who was the first Gym leader Ash had a battle with?",
  anwser : ["Brock ","Gary","Misty","Cynthia"]
},{
  question: "Where can you find the most Ghost Type Pokemon?",
  anwser : ["Lavender Town ","Mount Moon ","Cinnabar Island","Academia de Código"]
},{
  question: "What is Team Rocket's motto?",
  anwser : ["Prepare for trouble! And make it double!","Top Xuxa!","Meowth thats's right ","Mékie Filhão"]
},
]


internals.shuffleArray = function(question) {
  for (let i = question.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question[i], question[j]] = [question[j], question[i]];
  }
  return question;
};

internals.valor = -1;

  externals.getQuestion = function (){
    if(internals.valor === -1){
      internals.shuffleArray(question);
  }
    internals.valor++;
    console.log(question[internals.valor]);
    return question[internals.valor];
  }
