$(function(){

    let text1 = "薫ちゃん";
    let text2 = "神";
    let number1 = 30;
    let number2 = 25;

    $("#button01").on("click",function(){
        $("#content").text("こんにちは！");

    })

    $("#button02").on("click",function(){
        $("#content").text(text1);
    })


    $("#button03").on("click",function(){
        $("#content").text(text1 + text2);
    })

    $("#button04").on("click",function(){
        $("#content").text(number1 + number2);

    })
    $("#button05").on("click",function(){
        $("#content").text(number1+"引く"  + number2 +"は"　+ (number1 - number2) +"やで");
    })

})