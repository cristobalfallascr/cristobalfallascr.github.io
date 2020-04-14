//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];


var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  playSound(randomChosenColour);
  flashButton(randomChosenColour);
  level++;
  $("h1").addClass("hidden");
  
  $("h2").removeClass("hidden").text("Nivel " + level);
}


$(".btn").click( function (){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    flashButton(userChosenColour);
    animatePress(this);
    checkAnswer(userClickedPattern.length-1);
    
    
})

function playSound(colour){
  
  var selectedSound = new Audio("sounds/"+colour+".mp3");
  selectedSound.play();

}

function flashButton(colour){
  var selectedColor = "#"+colour;
  $(selectedColor).fadeOut(100).fadeIn(100);
}

function animatePress(currentColour){
  $(currentColour).addClass("pressed");
  setTimeout(function() {
    $(currentColour).removeClass("pressed") }, 50);
}

    $("h1").click(function(){
        var start = true;
        startGame(start);
        
      })

   function startGame(start){
      if(start === true){
        nextSequence();
        start = false;

      }
   }  



  function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
        nextSequence();
        }, 1000);

      } 
    
    }  else{
        console.log("wrong")
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over") }, 350);
          $("h1").removeClass("hidden").text("Has Perdido!!! Total de puntos: " + level+  " - Click aca para reiniciar");
          $("h2").addClass("hidden");
          startover();

          

      }
     

  }

  function startover(){
    level = 0;
    gamePattern = [];
    start = false;


  }

