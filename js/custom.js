$(document).ready(function(){
    var dis = $(".dis");
    var site = $("#site");
    var i=0;

    dis.on("click",function(){
        $(this).css("display","none");
        i++;
        if(i===3){
            newPage();
        }
    });

    

    function newPage(){
        window.location.href = 'summary.html';
        setTimeout(Down, 2000);
    }

    function Down() {
        site.css("opacity",1)
    }
    
})