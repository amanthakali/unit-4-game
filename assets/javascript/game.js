


$(document).ready (function(){


var win = 0;
var loss = 0;
var randomNumber;
var score;

function startGame(){
    randomNumber = Math.floor((Math.random() * 102) + 19);
    console.log('DEBUG random Number --- ' + randomNumber);
    $("#randomNum").html(randomNumber);
    score = 0;
    $('#score').text(score);
}

// startGame();

var imgRandomNumber1 = Math.floor((Math.random() *12));
var imgRandomNumber2 = Math.floor((Math.random() *12));
var imgRandomNumber3 = Math.floor((Math.random() *12));
var imgRandomNumber4 = Math.floor((Math.random() *12));

function scores(){
   
    startGame();
    $(".img1").on("click", function(){
       
        score+= imgRandomNumber1;
        console.log('DEBUG score ' + score);
        $('#score').text(score);
        checkWinLoss();
        
    });

    $(".img2").on("click", function(){
       
         score+= imgRandomNumber2;
         console.log('DEBUG score ' + score);
         $('#score').text(score);
         checkWinLoss();
    });

    $(".img3").on("click", function(){
        score+= imgRandomNumber3;
        console.log('DEBUG score ' + score);   
        $('#score').text(score);
        checkWinLoss();
        
    });

    $(".img4").on("click", function(){
       score+= imgRandomNumber4;
       console.log('DEBUG score ' + score);
        $('#score').text(score);
        checkWinLoss();
        
    });
         
    // $('#score').text(score);
   

}
    
scores();

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


});