function press(item) {
    switch (item) {
        case "#a1":
            let red = new Audio("sounds/red.mp3")
            red.play()
            break;
        case "#a2":
            let green = new Audio("sounds/green.mp3")
            green.play()
            break;
        case "#a3":
            let blue = new Audio("sounds/blue.mp3")
            blue.play()
            break;
        case "#a4":
            let yellow = new Audio("sounds/yellow.mp3")
            yellow.play()
            break;
        default:
            break;
    }
}
function randomSeries(){
    var rand = Math.floor((Math.random() * 4) + 1)
    let item = "#a" + rand
    $(item).addClass("added");
    setTimeout(() => {
        $(item).removeClass("added");
    }, "300");
    press(item)
    return item
}
function pressEvent(inSeries) {
    for (var i = 1; i < 5; i++) {

        let item = "#a" + i;
        if (item == inSeries) {
            $(item).click(
                function () {
                    $(item).addClass("pressed");
                    setTimeout(() => {
                        $(item).removeClass("pressed");
                    }, "200")
                    press(item)
                }
            )
        }
        else {
            $(item).click(
                function () {
                    $(item).addClass("pressed");
                    setTimeout(() => {
                        $(item).removeClass("pressed");
                    }, "200")
                    press(item)
                    $("body").css("background-color", "red")
                    $('*').on('keyup keydown');
                    $('h1').text('GAME OVER, Try again')
                }
            )
        }
    }
}
$('body').keydown(
    function (key){
        $("body").css("background-color", "rgb(27, 27, 80)")
        $('*').off('keyup keydown');
        console.log(key.originalEvent.key);
        $("h1").text("Simon Game");
        var count = 1;
        var listBtn = [];
        while (loop == 1){
            let p = randomSeries()
            listBtn.push(p)
            for (var i2 = 0; i2<listBtn.length; i++)
               pressEvent(listBtn[i2])
        }
    }
)