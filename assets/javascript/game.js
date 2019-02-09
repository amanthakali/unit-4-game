


$(document).ready (function(){


var win = 0;
var loss = 0;
var randomNumber;
var imgRandomNumber1; // random number for yellow image
var imgRandomNumber2; // random number for red image
var imgRandomNumber3; // random number for blue image
var imgRandomNumber4; // random number for circle image
var score;


// Start Game function
function startGame(){
    randomNumber = Math.floor((Math.random() * 102) + 19); // random Number 
    imgRandomNumber1 = Math.floor((Math.random() *12)+1);
    imgRandomNumber2 = Math.floor((Math.random() *12)+1);
    imgRandomNumber3= Math.floor((Math.random() *12)+1);
    imgRandomNumber4 = Math.floor((Math.random() *12)+1);
    console.log('DEBUG random Number --- ' + randomNumber);
    $("#randomNum").html(randomNumber);
    score = 0;
    $('#score').text(score);
}



// Compute functions.
// This function will add the scores, when the user clicks the images 
function compute(){
   
    startGame();
    $(".img1").on("click", function(){
       
        score+= imgRandomNumber1; // score will add when the user clicks yellow image
        console.log('DEBUG score ' + score);
        $('#score').text(score);  // insert text of the total score
        checkWinLoss();
        
    });

    $(".img2").on("click", function(){
       
         score+= imgRandomNumber2; // score will add when the user clicks red image
         console.log('DEBUG score ' + score);
         $('#score').text(score);
         checkWinLoss();
    });

    $(".img3").on("click", function(){
        score+= imgRandomNumber3; // score will add when the user clicks blue image
        console.log('DEBUG score ' + score);   
        $('#score').text(score);
        checkWinLoss();
        
    });

    $(".img4").on("click", function(){
       score+= imgRandomNumber4; // score will add when the user clicks circle image
       console.log('DEBUG score ' + score);
        $('#score').text(score);
        checkWinLoss();
        
    });
         
}
    

// Function to check if the random Number === total score
function checkWinLoss(){
    if(score === randomNumber){ 
        win++;
        $('#wins').text(win);
        console.log('DEBUG win -- ' + win);
        startGame();
    }
    else if (score > randomNumber){
        loss++;
        $('#loss').text(loss);
        console.log('DEBUG loss -- ' + loss );
        startGame();
    }
}

compute(); // This function will add the scores, when the user clicks the images 


});