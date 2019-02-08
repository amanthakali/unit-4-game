$(document).ready (function(){


var win = 0;
var loss = 0;
var randomNumber;
var score;
hasFinished = true;


function startGame(){
    randomNumber = Math.floor((Math.random() * 102) + 19);
    console.log('DEBUG random Number --- ' + randomNumber);
    $("#randomNum").html(randomNumber);
    win = 0;
    console.log('DEBUG win --- ' + win);
    $('#wins').append(win);
    loss = 0;
    $('#loss').append(loss);
    console.log('DEBUG loss --- ' + loss);
    score = 0;
    $('#score').append(score);
}

startGame();
/*
function generateImageRandomNum(){
    var imgRandNum1 = math.floor(math.ramdom) *12 ;
    var imgRandNum2 = math.floor(math.ramdom)* 12;
    var imgRandNum3 = math.floor(math.ramdom) *12 ;
    var imgRandNum4 = math.floor(math.ramdom)*12 ;
    $('#imageID1') = imgRandNum1;
    $('#imageID2') = imgRandNum2;
    $('#imageID3') = imgRandNum3;
    $('#imageID4') = imgRandNum4;
}

function addScore(){
    generateImageRandomNum();

    score += 


}


function win(){
    if(our randomNum === score){
        win++;
        generateRandomNum();
    }
    else{
        los++;
    }
}
 onclick event{

    

}



*/
});