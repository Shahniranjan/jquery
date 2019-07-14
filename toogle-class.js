//$("document").ready(function(){
//    $(".paras").hover(hovereffect);
//    $(".paras").click(function()
//                     {
//        $(this).toggle(4000,'linear');
//    });
//    
//    $("#linker").click(function()
//       {
//        var paran = $(".paras");
//        for (var i = 0 ; i < paran.length ; i++ )
//            {
//                console.log($(".paras").eq(i));
//                  if ($(".paras").eq(i).css('display') == 'none')
//                        {
//                            $(".paras").eq(i).css('display','block');
//                        }
//                    else
//                        {
//                            continue ;
//                        }
//            };
//    });
    
    function hovereffect()
    {
        $(this).toggleClass("highlight");
    };
    
//});

//slide uo and down

$('document').ready(function(){
    $('#up').on('click',function(){
        $(".paras").slideUp();
    });
    
     $('#down').on('click',function(){
        $(".paras").slideDown();
    });
});