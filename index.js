var gamePattern = []
var userPattern = []

var currentLevel = 1
var started = false


var colorPattern = ['green', 'red', 'blue', 'yellow']
function nextSequence(){
    userPattern = []
    $('h1').text("Level " + currentLevel)
    var rand = Math.floor(Math.random() * 4);
    var randomColor = colorPattern[rand];
    gamePattern.push(randomColor);
    var randomId = '#' + randomColor;
    console.log(rand + ' ' + randomColor + '' + gamePattern )
    flashAnimattion(randomId)
    playMusic(randomColor)
    currentLevel++
}

function flashAnimattion(idGiven){
    $(idGiven).fadeOut(100).fadeIn(100);
}
function pressAnimation(idGiven){
    $(idGiven).addClass("pressed")
    setTimeout(() => {
        $(idGiven).removeClass("pressed")
    }, "100")
}

function playMusic(colorProvided){
    var aud = new Audio("sounds/" + colorProvided + '.mp3')
    aud.play()
}

function clicked(){
    $(".btn").click(
        function(){
            var clickedId = $(this).attr("id")
            userPattern.push(clickedId)
            console.log(userPattern + '  ' + gamePattern)
            pressAnimation('#' + clickedId)
            playMusic(clickedId)
            checkAnswer(userPattern.length - 1)
            
        }
    )
}

function checkAnswer(Level){
    if (gamePattern[Level] === userPattern[Level]){
        if (userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
                console.log('right')
            }, '500')
        }
    }
    else{
        $('h1').text("game over, press any key to restart.")
        $('body').addClass('gameOver')
        playMusic('wrong')
        gamePattern =[]
        userPattern = []
        startOver()
    }
}



$('body').on('keydown', function(){
    if (!started){
        var check = $('body').attr('class');
        if (check === 'gameOver'){
            $('body').removeClass('gameOver');
        }
        nextSequence();
        clicked();
        started = true;
    }
})

function startOver() {
    currentLevel = 1;
    gamePattern = [];
    started = false;
  }
