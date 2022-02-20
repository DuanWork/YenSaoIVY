
var a;
function show_hide()
{
    if (a == 1)
    {
        document.getElementById("subnav").style.display="block";
        return a = 0;
    }else{
        document.getElementById("subnav").style.display="none";
        return a = 1;
    }
}


var slider_img = document.querySelector(".")