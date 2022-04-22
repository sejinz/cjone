//main.js

var $devWidth;
var $limitsize=768;

$(document).ready(function(){

    $devWidth = $("body").width();
    console.log($devWidth);

    $(window).resize(function(){
        $devWidth = $("body").width();
        console.log($devWidth);
    });

    // 로그인 이미지 
    var appear ="";
    for(var i=0; i<57; i++){
        if(i<10){ //i가 0보다 작으면 앞이 0이4개 
            appear +="<img src='images/appear/appear_0000" + i + ".png' />";

        }else{//ㄱ렇지 않으면 앞에 0이 3개만 붙어라 
            appear +="<img src='images/appear/appear_000" + i + ".png' />";
        }
    }
    $("a.appear").html(appear);

    var loop="";
    for(var i=0; i<82; i++){
        if(i<10){ //i가 0보다 작으면 앞이 0이4개 
            loop +="<img src='images/loop/loop_0000" + i + ".png' />";

        }else{//ㄱ렇지 않으면 앞에 0이 3개만 붙어라 
            loop +="<img src='images/loop/loop_000" + i + ".png' />";
        }
    }
    $("a.loop").html(loop);

//  로그인 애니메니션 
for(var k=0; k<57; k++){ // 로딩시 뛰어오르는 이미지 
    $(".appear>img").eq(k).css({"animation":"ani 2.85s linear "+(k*0.05)+"s 1 normal"});
}
for(var i=0; i<82; i++){ //now만 커지는 이미지 
    $(".loop>img").eq(i).css({"animation":"ani 4.1s linear "+(2.85+0.05*i)+"s infinite normal"})
}

// 검색열기 
$("span.srch_open").click(function(){
    $(this).toggleClass("on");
    $("form.srch").toggleClass("on");

    if($(this).hasClass("on")){
        $(this).children("a").attr("title","검색입력서식 닫기");
    }else{
        $(this).children("a").attr("title","검색입력서식 열기");
    }
});

//고객센터 
$("dl.topmenu > dd").eq(4).click(function(){
    $(this).toggleClass("on");
});
// 모바일 고객센터 
$("dl.mob_topmenu dd").eq(4).click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
        $(this).children("a").attr("title","고객센터 닫기");
    }else{
        $(this).children("a").attr("title","고객센터 열기");
    }
});
// 모바일 주메뉴 2단 
$(".mob_gnb > ul > li").click(function(){
    $("this").siblings().removeClass("on");
    $(this).toggleClass("on");
});

// 햄버거 버튼 클릭 
$(".mobBtn").click(function(){
        $(".mob").addClass("on");
        $(".mobBtn_close").addClass("on");
        $(".body").addClass('.on');
        $("div.bg").addClass('on');
        $(this).hide();
    });

    // 모바일 닫기 클릭 
    $("div.mobBtn_close").click(function(){
        $(".mob.on").removeClass("on");
        $(this).removeClass("on");
        $(".body").removeClass('.on');
        $("div.bg").removeClass('on');
        $(this).show();
    });







// 배너 
var $bnnNum=0;
var $lastNum=$(".main_visual>ul").size()-1;
var $banner_w=$("body>section").width();

// 리사이즈 
$(window).resize(function(){
$banner_w=$("body>section").width();
});

// 다음 
$(".next").click(function(){
   $bnnNum++;
   if($bnnNum > $lastNum) $bnnNum=0;
   $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){

    if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
        $(".arrow > a").addClass("white");
        $(".rolling  a").addClass("white");
    }else{
        $(".arrow > a").removeClass("white");
        $(".rolling  a").removeClass("white");
    }

    $(".banner_roll a").removeClass("on");
    $(".banner_roll a").eq($bnnNum).addClass("on");
   });
});

//이전
$(".prev").click(function(){
    $bnnNum--;
    if($bnnNum < 0) $bnnNum=$lastNum;
    $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){

        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(".arrow > a").addClass("white");
            $(".rolling  a").addClass("white");
        }else{
            $(".arrow > a").removeClass("white");
            $(".rolling  a").removeClass("white");
        }
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
       });
    });

    //오토배너 
    function autobanner(){
        //next를 누르는 격
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum=0;
        $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){
     
         if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
             $(".arrow > a").addClass("white");
             $(".rolling  a").addClass("white");
         }else{
             $(".arrow > a").removeClass("white");
             $(".rolling  a").removeClass("white");
         }
     
         $(".banner_roll a").removeClass("on");
         $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    };

    //일정 시간동안 계속 반복
    var $autoBnn = setInterval(autobanner,5000);

// 재생멈춤
var flag=true;
$("a.play").click(function(){
    if(flag){
        //멈춰라
        clearInterval($autoBnn);
        $(this).addClass("pause");
        flag = false;
    }else{
        //재생
        $autoBnn = setInterval(autobanner,5000);
        $(this).removeClass("pause");
        flag = true;
    }
});
// 롤링클릭 
var $banner = $(".banner_roll a").click(function(){
    $bnnNum = $banner.index(this);
    $(".banner_frame").stop().animate({"left":$bnnNum*-$banner_w},600,"linear",function(){

        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(".arrow > a").addClass("white");
            $(".rolling  a").addClass("white");
        }else{
            $(".arrow > a").removeClass("white");
            $(".rolling  a").removeClass("white");
        }
    
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
        
    });
});
/////모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 
//달라지는것에 대비해서 항상 바른 위치에 있도록 애니메이션 적용
$("body>section").bind("orientationchange",function(){
    $banner_w=$("body>section").width();
    $(".banner_frame").animate({left:$bnnNum*-$banner_w},600,"linear");
});

// 모바일에서 
$("body>section").bind("swipeleft",function(){
    $(".next").trigger("click");
});
$("body>section").bind("swiperight",function(){
    $(".prev").trigger("click");
});

// 퀵메뉴1 이미지 
var quick1 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick1+="<img src='images/quick01/quick01_0000" + j + ".png' />";
    }else{
        quick1+="<img src='images/quick01/quick01_000" + j + ".png' />";
    }
}
// 사진 보여주기 
$(".quick1").html(quick1);

// 퀵메뉴2 이미지 
var quick2 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick2+="<img src='images/quick02/quick02_0000" + j + ".png' />";
    }else{
        quick2+="<img src='images/quick02/quick02_000" + j + ".png' />";
    }
}
// 사진 보여주기 
$(".quick2").html(quick2);

// 퀵메뉴3 이미지 
var quick3 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick3+="<img src='images/quick03/quick03_0000"+ j + ".png' />";
    }else{
        quick3+="<img src='images/quick03/quick03_000" + j + ".png' />";
    }
}
// 사진 보여주기 
$(".quick3").html(quick3);
// 퀵메뉴4 이미지 
var quick4 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick4+="<img src='images/quick04/quick04_0000" + j + ".png' />";
    }else{
        quick4+="<img src='images/quick04/quick04_000" + j + ".png' />";
    }
}
// content 2사진 보여주기 
$(".quick4").html(quick4);

// 마우스 올렸을때 
$(".content1 a").hover(function(){
    for(var k=0; k<20; k++){
        $(this).find("span").children().eq(k).css({"animation":"ani 1s linear " +0.05*k+"s 1 normal"});
    }
    // 마우스 올렸을때 
    },function(){
    //마우스 뗏을때
    $(this).find("span").children().css({"animation":"none"});
});

// content3 
//마우스 hover 
$(".content3_inner > div > ul > li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

// 대분류 
$(".content3_inner > ul > li >a").bind("click fouse",function(e){
    e.preventDefault();
    $(".content3_inner > ul > li >a").removeClass("on");
    $(this).addClass("on");

// 카테고리별로 뜨게 하기 
    var $className = $(this).parent().attr("class");
    $(".content3_inner > div > ul > li").hide();

    switch($className){
        case "all" :
            $(".content3_inner > div > ul > li").show();
            break;
        case "ent" :
            $(".content3_inner > div > ul").find(".ent").show();
            break;
        case "shop" :
            $(".content3_inner > div > ul > li").filter(".shop").show();
            break;
        case "diner" :
            $(".content3_inner > div >  ul").find(".diner").show();
            break;
        case "box" :
            $(".content3_inner > div >  ul").find(".box").show();
            break;
        default :
            break;
    };    
});

//패밀리 사이트 
$(".family_site").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on")
        
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","닫기");
        }else{
            $(this).children("a").attr("title","열기");
        }
    });
    // 스크롤 이벤트 도넛
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        console.log(scroll);

        //탑버튼
        if(scroll < 100){
            $("div.top").removeClass("on ab");
        }

        if(scroll >= 100 && scroll < 2800){
            $("div.top").removeClass("ab");
            $("div.top").addClass("on");
        }
        if(scroll >= 2800){
            $("div.top").addClass("ab");
        }



        // 도넛
        $(".doughnut_left_l").css({"top":71+scroll*0.5});
        $(".doughnut_left_s").css({"top":96+scroll*0.1});
        $(".combine_left").css({"top":50+scroll*0.8});

        $(".doughnut_center_m").css({"top":726+scroll*0.1});
        $(".doughnut_center_s").css({"top":991+scroll*1.1});

        $(".doughnut_right_m").css({"top":365+scroll*0.5});
        $(".doughnut_right_s").css({"top":947+scroll*1.1});
        $(".combine_right").css({"top":-300+scroll*0.7});
    });

    // 햄버거 버튼 클릭 
    $("div.mobbtn").click(function(){
        $("div.mob").addClass("on");
        $("div.mobbtn_close").addClass("on");
        $("body").addClass("on");
        $("div.bg").addClass("on");
        $(this).hide();
    });
//모바일 닫기 버튼 클릭 
$("div.mobbtn_close").click(function(){
    $("div.mob").removeClass("on");
    $("div.mobbtn_close").removeClass("on");
    $("body").removeClass("on");
    $("div.bg").removeClass("on");
    $("div.mobbtn").show();
});


// 주메뉴 
$(".gnb>ul>li>a").bind("mouseover focus",function(){
    if($devWidth<$limitsize) return false; // 함수 실행 정지

    if( $("form.srch").is(":visible")  ){
        $("form.srch").removeClass("on");
        $(".srch_open").removeClass("on");
    }
    if( $("dl.topmenu > dd").eq(4).hasClass("on") ) {
        $("dl.topmenu > dd").eq(4).removeClass("on");
    }

    $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
        $(".gnb>ul>li>ul").css("display","block");
    });
});

$(".gnb").bind("mouseleave blur",function(){
    if($devWidth<$limitsize) return false; // 함수 실행 정지
    $(".header_wrap").animate({"height":"120px"},300,"linear",function(){
        $(".gnb > ul > li > ul").css("display","none");
    });
});











//⬇️ 끝
});



    