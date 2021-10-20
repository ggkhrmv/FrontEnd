$(document).ready(function(){

    let score = 0;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("[name='sub']").click(function(){
        let operator = "-";
        let num1 = getRandomIntInclusive(1,150);
        let num2 = getRandomIntInclusive(1,150);
        $("ul").toggle();
        $("h3").toggle();
        $("#question").text(function(){
           return "Question: "+num1+" "+operator+" "+num2+" = ?";
        })
                            .css("visibility","visible");
        $("#ansQ").css("visibility","visible")
                        .keypress(function(e){
                            if (e.which === 13) {
                                let userAns = $("#ansQ").val();
                                let actualAns = num1 - num2;
                                if (userAns == actualAns) {
                                    $("#feedback").text("that's right! +1")
                                        .css("visibility", "visible")
                                        .css("color", "#04E762");
                                    score += 1;
                                    $(".score").text(score);
                                    $(".pAgain").css("display","flex");
                                } else {
                                    $("#feedback").text("wrong answer, please try again!")
                                        .css("visibility", "visible")
                                        .css("color", "#BA274A");
                                }
                            }
        });
    });
    $("[name='add']").click(function(){
        let operator = "+";
        let num1 = getRandomIntInclusive(1,150);
        let num2 = getRandomIntInclusive(1,150);
        $("ul").toggle();
        $("h3").toggle();
        $("#question").text(function(){
            return "Question: "+num1+" "+operator+" "+num2+" = ?";
        })
            .css("visibility","visible");
        $("#ansQ").css("visibility","visible")
            .keypress(function(e){
                if (e.which === 13) {
                    let userAns = $("#ansQ").val();
                    let actualAns = num1 + num2;
                    if (userAns == actualAns) {
                        $("#feedback").text("that's right! +1")
                            .css("visibility", "visible")
                            .css("color", "#04E762");
                        score += 1;
                        $(".score").text(score);
                        $(".pAgain").css("display","flex");
                    } else {
                        $("#feedback").text("wrong answer, please try again!")
                            .css("visibility", "visible")
                            .css("color", "#BA274A");
                    }
                }
            });
    });
    $("[name='multi']").click(function(){
        let operator = "*";
        let num1 = getRandomIntInclusive(1,20);
        let num2 = getRandomIntInclusive(1,10);
        $("ul").toggle();
        $("h3").toggle();
        $("#question").text(function(){
            return "Question: "+num1+" "+operator+" "+num2+" = ?";
        })
            .css("visibility","visible");
        $("#ansQ").css("visibility","visible")
            .keypress(function(e){
                if (e.which === 13) {
                    let userAns = $("#ansQ").val();
                    let actualAns = num1 * num2;
                    if (userAns == actualAns) {
                        $("#feedback").text("that's right! +1")
                            .css("visibility", "visible")
                            .css("color", "#04E762");
                        score += 1;
                        $(".score").text(score);
                        $(".pAgain").css("display","flex");
                    } else {
                        $("#feedback").text("wrong answer, please try again!")
                            .css("visibility", "visible")
                            .css("color", "#BA274A");
                    }
                }
            });
    });

    $(".playAgain").click(function (){
        $("ul").toggle();
        $("h3").toggle();
        $("#ansQ").val(0)
            .css("visibility","hidden");
        $("#question").css("visibility","hidden");
        $("#feedback").css("visibility","hidden");
        $(".pAgain").css("display","none");
    });

});
