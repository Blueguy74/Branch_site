function setContainerLayout()
{
    var body_width=$("body").width();
    var container_width=$("#container").width();
    var margin=(body_width-container_width)/2;
    if(margin>0)
    $("#container").css({"left":margin+"px"});
}

function setLogo()
{
    var body_width=$("body").width();
    var logo_width=$("#logo").width();
    var margin=(body_width-logo_width)/2;
    if(body_width<720)
    $("#logo").css({"left":margin+"px"});

}


$(document).ready(function(){
            setContainerLayout();
            setLogo();

           $(window).resize(function(){
               setContainerLayout();
               setLogo();
           });




           $("#menu_title").click(function(){
               $("#menu").toggle();
           })

})