// $("document").ready(function(){
//        $("body").append("<h1>hey pandey</h1>")
//    });

$("document").ready(function(){
    $("h1:first").css('border' , '2px solid red');
});

$("document").ready(function(){
    $("#idhead").css('border', ' 3px solid black');
});

$("document").ready(function(){
    $(".classdon").css('border', '4px solid green');
});


$("document").ready(function(){
    $('#box').on('click',changeonclick);
    $('#box').on('mouseleave',changeonleave);
    $('#box').on('mouseenter',changeonenter);
    function changeonclick()
    {
        $("#box").html("<h1>you clicked me bro</h1>").css("border","5px solid blue");
    };
    
     function changeonleave()
    {
        $("#box").html("<h1>dont leave me  bro</h1>").css("border","10px solid purple");
    };
     function changeonenter()
    {
        $("#box").html("<h1>click me if you can !!!!!!</h1>").css("border","20px solid yellow");
    };
});

//$("document").ready(function(){
//    $(".classdon").on("click",changeheading);
//    function changeheading()
//    {
//    var newHead = $("<h1>");
//    newHead.append("<i>this is replacing niranjan</i>");
//    $(".classdon").html(newHead);
//    };
//    $(".classdon").on('mouseenter',changeonenter);
//    function changeonenter()
//    {
//        var newh = $("<h1>")
//        newh.html ("<b>bro you hovered see the change");
//        $(".classdon").html(newh);
//    }
//})

$("document").ready(function(){
    $(".classdon").on("click",changeheading);
    function changeheading()
    {
    $(".classdon").fadeOut(3000);
    };
    $("#idhead").on('click',changeonenter);
    function changeonenter()
    {
        $(".classdon").fadeIn(3000);
    }
     $(".classdon").on("mouseenter",changeenter);
    function changeenter()
    {
    var newhead = $("<i>");
    newhead.append("<i>click me to hide </i>");
    $(".classdon").html(newhead);
    };
    
    $("#h1id").on('click',function(){
       $("h1:first").fadeToggle(3000); 
    });
    
})
