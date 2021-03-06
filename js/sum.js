$(document).ready(function(){
    var $tab = $(".tabmenu").find("ul li a")
    var siteli = $("#site").find("li");
    var siteli2 = $("#site").find("li").eq(1);
    var cursor = $(".cursor");
    var $right = $(".rightcircle").find(".visible");
    //페이지 로딩 시 사이트영상리스트 나타나도록
    setTimeout(Down, 1000);   

    //마우스 오버 시 목차 너비변화/영상 재생
    $tab.on("mouseenter",function(){
        tabenter($(this));
    });
    $(".btn2, .btn3").on("mouseenter",function(){
        btnenter($(this));
    });

    $tab.on("mouseout",function(){
        tabout($(this));
        cursor.css("transform","translate(-50%,0%)");
    });
    $(".btn2, .btn3").on("mouseout",function(){
        var ind = $(this).attr("index-data");
        var inde = parseInt(ind)-1;
        btnout(inde);
        cursor.css("transform","translate(-50%,0%)");
    });

    siteli2.on("mouseenter",function(){
        si2();
        
    });
    siteli2.on("mouseout",function(){
        var ind = $(this).index()
        btnout(ind);
    });

    $(".btn2").on("mouseenter",function(){
        cursor.css("transform","translate(-200%,0%)");
    });
    $(".btn3").on("mouseenter",function(){
        cursor.css("transform","translate(200%,0%)");
    });
    //메인사이트 미리시작
    setTimeout(si2,2000);

    //전자시계
    setInterval(showTime, 1000);

    function si2(){
        siteli.css("width","15%");
        siteli2.addClass("on").css("width","68%").find("video").get(0).play();
        cursor.addClass("on").find("span").text("Click to link!");
        $tab.parent("li").removeClass("on");
        $tab.parent("li").eq(1).addClass("on");
        $right.eq(1).css({"display":"block"});
    }
    function tabenter(el){
        var index = el.parent("li").index();
        $tab.parent("li").removeClass("on");
        $tab.parent("li").eq(index).addClass("on");
        $right.eq(index).css({"display":"block"});
        if(index===1){
            siteli.css("width","15%");
            siteli2.addClass("on").css("width","68%").find("video").get(0).play();
            cursor.addClass("on").find("span").text("Click to link!");
        }else{
            if(index===0){
                $(".btn2").addClass("on");
                siteli.css("width","15%");
                siteli.eq(index).addClass("on").css("width","68%").find("video").get(0).play();
                cursor.addClass("on").find("span").text("Click to link!");;
                siteli2.find("video").get(0).pause();
                cursor.css("transform","translate(-200%,0%)");
            }
            if(index===2){
                $(".btn3").addClass("on");
                siteli.css("width","15%");
                siteli.eq(index).addClass("on").css("width","68%").find("video").get(0).play();
                cursor.addClass("on").find("span").text("Click to link!");;
                siteli2.find("video").get(0).pause();
                cursor.css("transform","translate(200%,0%)");
            } 
        }
    }
    function btnenter(el){
        siteli.css("width","15%");
        var ind = el.attr("index-data");
        var inde = parseInt(ind)-1;
        $tab.parent("li").removeClass("on");
        $right.eq(inde).css({"display":"block"});
        $tab.parent("li").eq(inde).addClass("on");
        siteli.eq(inde).addClass("on").css("width","68%").find("video").get(0).play();
        cursor.addClass("on").find("span").text("Click to link!");;
        siteli2.find("video").get(0).pause();
    }
    function tabout(el){
        var index = el.parent("li").index();
        $tab.parent("li").eq(index).removeClass("on");
        $right.css({"display":"none"});
        siteli.eq(index).removeClass("on").find("video").get(0).pause();
        siteli.eq(0).css("width","19%");
        siteli.eq(1).css("width","60%");
        siteli.eq(2).css("width","19%");
        cursor.removeClass("on").find("span").text("Hover to play!");
        $(".btn2,.btn3").removeClass("on");
    }
    function btnout(index) {
        $tab.parent("li").eq(index).removeClass("on");
        $right.css({"display":"none"});
        siteli.eq(index).removeClass("on").find("video").get(0).pause();
        siteli.eq(0).css("width","19%");
        siteli.eq(1).css("width","60%");
        siteli.eq(2).css("width","19%");
        cursor.removeClass("on").find("span").text("Hover to play!");
    }


    function Down() {
        $("#site").css({"opacity":1,"transform":"translate(0%)"})
    }
    
    

    function showTime(){
        var today = new Date();
        var hour = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        if(hour>=5 && hour<11){
            // console.log("morning");
            $("#clock").removeClass().addClass("morning");
        }
        if(hour>=11 && hour<16){
            // console.log("afternoon");
            $("#clock").removeClass().addClass("afternoon");
        }
        if(hour>=16 && hour<23){
            // console.log("evening");
            $("#clock").removeClass().addClass("evening");
        }
        if(hour>=23 || hour<5){
            // console.log("night");
            $("#clock").removeClass().addClass("night");
        }

        var result_hr = getHr(hour).hr;
        var result_day = getHr(hour).day;
        var result_min = plusZero(min);
        var result_sec  = plusZero(sec);


        $(".hr").text(result_hr);
        $(".min").text(result_min);
        $(".sec").text(result_sec);
        $(".day").text(result_day);
    }
   

    function getHr(hour){
        if(hour<12){             
            (hour < 10) ? hour = "0"+hour : hour;     
            var result = {
                hr : hour,
                day : "am"
            }
            return result;
    
        }else{
            hour = hour-12; 
            (hour < 10) ? hour = "0"+hour : hour; 
            var result = {
                hr : hour,
                day : "pm"
            }
            return result;
        }  
    }
    
    function plusZero(time){
        (time < 10) ? time = "0"+time : time;
        return time;
    }


})