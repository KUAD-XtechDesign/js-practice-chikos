
$(function(){

    $("#button01").on("click",function(){
        $("#box01").hide();
    })
    
    $("#button01").on("click",function(){
        $("#box04").hide();
    })

    $("#button01").on("click",function(){ 
        $("#box07").hide();   
    })



    $("#button02").on("click",function(){
        $(".back-blue").hide();
    })

    $("#button03").on("click",function(){
        $("#box03,#box07").hide();
    })

    $("#button04").on("click",function(){
        $(".box").show();
    })
})
