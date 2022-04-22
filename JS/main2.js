var devWidth;
var limitsize=768;

window.addEventListener('load', function(){
    devWidth = document.querySelector('body').offsetWidth;

    window.addEventListener('resize',function(){
        devWidth = document.querySelector('body').offsetWidth;
        console.log(devWidth)    
    });

    //햄버거 버튼 클릭
    var mobbtn = document.querySelector('div.mobbtn');
    var mob = document.querySelector('.mob');
    var mobclose = document.querySelector('div.mobbtn_close');
    var body = document.querySelector("body");
    var bg = document.querySelector(".bg");

    mobbtn.addEventListener("click", function () {
        mob.classList.add("on");
        mobclose.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        mobbtn.style.display = "none";
    });
  // 메뉴 닫기 
  mobclose.addEventListener("click", function () {
    mob.classList.remove("on");
    mobclose.classList.remove("on");
    body.classList.remove("on");
    bg.classList.remove("on");
    mobbtn.style.display = "block";
});

// 주메뉴 변수 
var gnbmenu = document.querySelectorAll('.gnb>ul>li');
var headerwrap = document.querySelector('.header_wrap');
var formsrch = document.querySelector("form.srch");
var srchopen = document.querySelector(".srch_open");
var topmenudd = document.querySelectorAll('dl.topmenu > dd');
var submenu = document.querySelectorAll('.gnb>ul>li>ul');

for (var i=0; i < gnbmenu.length; i++) {
    gnbmenu[i].addEventListener('mouseover', function(){
        if (devWidth < limitsize) return false;

        if (formsrch.offsetWidth > 0 && formsrch.offsetHeight > 0) {
            formsrch.classList.remove("on");
            srchopen.classList.remove("on");
        }
        if (topmenudd[4].classList.contains('on')) {
            topmenudd[4].classList.remove("on");
        }
        headerwrap.classList.add("on");

        submenu.forEach(function(item) {
            item.classList.add("on");
        })
    }) // 마우스 오버 

    gnbmenu[i].addEventListener('mouseout', function(){
        if (devWidth < limitsize) return false;

        headerwrap.classList.remove("on");

        submenu.forEach(function(item){
            item.classList.remove("on");
        })
    })  // 마우스 아웃
} //for

// 로그인 이미지 
var appear ="";
for(var i=0; i<57; i++){
    if(i<10){ //i가 0보다 작으면 앞이 0이4개 
        appear +="<img src='images/appear/appear_0000" + i + ".png' />";

    }else{//ㄱ렇지 않으면 앞에 0이 3개만 붙어라 
        appear +="<img src='images/appear/appear_000" + i + ".png' />";
    }
}
document.querySelector("a.appear").innerHTML = appear;

var loop="";
for(var i=0; i<82; i++){
    if(i<10){ //i가 0보다 작으면 앞이 0이4개 
        loop +="<img src='images/loop/loop_0000" + i + ".png' />";

    }else{//ㄱ렇지 않으면 앞에 0이 3개만 붙어라 
        loop +="<img src='images/loop/loop_000" + i + ".png' />";
    }
}
document.querySelector("a.loop").innerHTML = loop;


//  로그인 애니메니션 
var appearimg = document.querySelectorAll(".appear>img");
for(var k=0; k<57; k++){ // 로딩시 뛰어오르는 이미지 
appearimg[k].style.animation="ani 2.85s linear "+(k*0.05)+"s 1 normal";
}
var loopimg = document.querySelectorAll(".loop>img");
for(var i=0; i<82; i++){ //now만 커지는 이미지 
loopimg[i].style.animation="ani 4.1s linear "+(2.85+0.05*i)+"s infinite normal";
}

// 퀵메뉴1 이미지 
var quick1 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick1+="<img src='images/quick01/quick01_0000" + j + ".png' />";
    }else{
        quick1+="<img src='images/quick01/quick01_000" + j + ".png' />";
    }
}
document.querySelector("span.quick1").innerHTML = quick1;

var quick2 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick2+="<img src='images/quick02/quick02_0000" + j + ".png' />";
    }else{
        quick2+="<img src='images/quick02/quick02_000" + j + ".png' />";
    }
}
document.querySelector(".quick2").innerHTML = quick2;

var quick3 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick3+="<img src='images/quick03/quick03_0000" + j + ".png' />";
    }else{
        quick3+="<img src='images/quick03/quick03_000" + j + ".png' />";
    }
}
document.querySelector(".quick3").innerHTML = quick3;

var quick4 ="";
for(var j=0; j<20; j++){
    if(j<10){
        quick4+="<img src='images/quick04/quick04_0000" + j + ".png' />";
    }else{
        quick4+="<img src='images/quick04/quick04_000" + j + ".png' />";
    }
}
document.querySelector(".quick4").innerHTML = quick4;

//마우스 오버
var content1Li = document.querySelectorAll(".content1 ul li");
content1Li.forEach(function(item){
    item.addEventListener("mouseover",function(){
        for(var j = 0; j < 20; j++){
            var imgLi = this.children[0].children[0].children;
            imgLi[j].style.animation = "ani 1s linear "+0.05*j+"s 1 normal";
        }
    });
});
//마우스 아웃
content1Li.forEach(function(item){
    item.addEventListener("mouseout",function(){
        for(var j = 0; j < 20; j++){
            var imgLi = this.children[0].children[0].children;
            imgLi[j].style.animation = "none";
        }
    });
});

//검색버튼
srchopen .addEventListener("click", function(){
    this.classList.toggle("on");
    formsrch.classList.toggle("on");

    if (this.classList.contains("on")) {
        this.children[0].setAttribute("title", "검색입력서식 닫기");
    } else {
        this.children[0].setAttribute("title", "검색입력서식 열기");
    }
})

// 고객센터 
topmenudd[4].addEventListener('click', function(){
    this.classList.toggle("on");
    if(this.classList.contains("on")){
        this.children[0].setAttribute("title", "고객센터 닫기");
    }else{
        this.children[0].setAttribute("title", "고객센터 열기");   
     }
});

// 모바일 고객센터 
var mobtopmenu = document.querySelectorAll(".mob_topmenu>dd")
    mobtopmenu[4].addEventListener('click', function(){
    this.classList.toggle("on");
    if(this.classList.contains("on")){
        this.children[0].setAttribute("title", "고객센터 닫기");
    }else{
        this.children[0].setAttribute("title", "고객센터 열기");   
     }
});
// 모바일 주메뉴 
var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
	for (i = 0; i < mobGnbLi.length; i++) {
        mobGnbLi[i].addEventListener("click", function () {

                mobGnbLi.forEach(function(item){
                    item.classList.remove("on");
                });
                this.classList.toggle("on");
            });
        }

//배너 
var bnnNum = 0;
var lastNum = document.querySelectorAll(".banner_frame > section").length - 1;
var banner_w = document.querySelector("body > section").offsetWidth; 

window.addEventListener('resize', function(){
    banner_w = document.querySelector("body > section").offsetWidth;
    console.log(banner_w);
});

var next = document.querySelector(".next");
var bannerFrame = document.querySelector(".banner_frame");

var bannerSection = document.querySelectorAll(".banner_frame > section");
var arrowA = document.querySelectorAll(".arrow > a");
var rollingA = document.querySelectorAll(".rolling a");
var banner_rollA = document.querySelectorAll('.banner_roll a'); 

var prev = document.querySelector(".prev");
var Play = document.querySelector('a.play');



///NEXT
next.addEventListener('click', function(){
    bnnNum++;
    if(bnnNum > lastNum) bnnNum = 0;
    bannerFrame.style.left = bnnNum * -banner_w + "px";

    if( bannerSection[bnnNum].classList.contains('white') ){
        arrowA.forEach(function(item){
            item.classList.add('white');
        });
        rollingA.forEach(function(item){
            item.classList.add('white');
        });
    }else{
        arrowA.forEach(function(item){
            item.classList.remove('white');
        });
        rollingA.forEach(function(item){
            item.classList.remove('white');
        });
    }
    banner_rollA.forEach(function(item){
        item.classList.remove('on');
    });
    banner_rollA[bnnNum].classList.add('on');
});

//PREV
prev.addEventListener('click', function(){
    bnnNum--;
    if(bnnNum < 0) bnnNum = lastNum;

    bannerFrame.style.left = bnnNum * -banner_w + "px";

    if( bannerSection[bnnNum].classList.contains('white') ){
        arrowA.forEach(function(item){
            item.classList.add('white');
        });
        rollingA.forEach(function(item){
            item.classList.add('white');
        });
    }else{
        arrowA.forEach(function(item){
            item.classList.remove('white');
        });
        rollingA.forEach(function(item){
            item.classList.remove('white');
        });
    }
    banner_rollA.forEach(function(item){
        item.classList.remove('on');
    });
    banner_rollA[bnnNum].classList.add('on');
});

///// 오토배너 
function autoBanner(){
    bnnNum++;
    if(bnnNum > lastNum) bnnNum = 0;
    bannerFrame.style.left = bnnNum * -banner_w + "px";

    if( bannerSection[bnnNum].classList.contains('white') ){
        arrowA.forEach(function(item){
            item.classList.add('white');
        });
        rollingA.forEach(function(item){
            item.classList.add('white');
        });
    }else{
        arrowA.forEach(function(item){
            item.classList.remove('white');
        });
        rollingA.forEach(function(item){
            item.classList.remove('white');
        });
    }
    banner_rollA.forEach(function(item){
        item.classList.remove('on');
    });
    banner_rollA[bnnNum].classList.add('on');
}
var autoBnn = setInterval(autoBanner,5000);

////재생 멈춤
var flag = true;
Play.addEventListener('click', function(){
    if(flag){
        clearInterval(autoBnn);
        this.classList.add('pause');
        flag = false;
    }else{
        autoBnn = setInterval(autoBanner,5000);
        this.classList.remove('pause');
        flag = true;
    }
});

/// 롤링클릭
var banner_roll = document.querySelectorAll(".banner_roll li");
banner_roll.forEach(function(item){
    item.addEventListener('click', rollAction);
});

function rollAction(item){
    curRoll = item.currentTarget;
    parentRoll = curRoll.parentElement;
    childRoll = parentRoll.children;
    bnnNum = Array.from(childRoll).indexOf(curRoll);


    bannerFrame.style.left = bnnNum * -banner_w + "px";

    if( bannerSection[bnnNum].classList.contains('white') ){
        arrowA.forEach(function(item){
            item.classList.add('white');
        });
        rollingA.forEach(function(item){
            item.classList.add('white');
        });
    }else{
        arrowA.forEach(function(item){
            item.classList.remove('white');
        });
        rollingA.forEach(function(item){
            item.classList.remove('white');
        });
    }
    banner_rollA.forEach(function(item){
        item.classList.remove('on');
    });
    banner_rollA[bnnNum].classList.add('on');
}
//content3 마우스 오버
var content3Li = document.querySelectorAll('.content3_inner > div > ul > li');
content3Li.forEach(function(item){
    item.addEventListener('mouseover', function(){
        this.classList.add('on');
    });
    item.addEventListener('mouseout', function(){
        this.classList.remove('on');
    });
});

//대분류 
var group = document.querySelectorAll(".content3_inner > ul > li > a");

var all = document.querySelectorAll(".content3_inner > div > ul > li")
var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent")
var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop")
var diner = document.querySelectorAll(".content3_inner > div > ul > li.diner")
var box = document.querySelectorAll(".content3_inner > div > ul > li.box")

for(var k=0; k<group.length; k++){
    group[k].addEventListener('click', function(event){
        event.preventDefault();

        group.forEach(function(idx){
            idx.classList.remove('on');
        });
        this.classList.add('on');

        var className = this.parentElement.getAttribute("class");
    
        all.forEach(function(item){
            item.style.display = "none";
        });
        switch(className){
            case "all":
                all.forEach(function(item){
                    item.style.display = "block";
                });
                break;
            case "ent":
                ent.forEach(function(item){
                    item.style.display = "block";
                });
                break;
            case "shop":
                shop.forEach(function(item){
                    item.style.display = "block";
                });
                break;
            case "diner":
                diner.forEach(function(item){
                    item.style.display = "block";
                });
                break;
            case "box":
                box.forEach(function(item){
                    item.style.display = "block";
                });
                break;
                default :
                    break;
            };
    }); // click
}

// 패밀리 사이트 
var famopen = document.querySelector(".family_site");
var famlist = document.querySelectorAll(".family_site ul");

famopen .addEventListener("click", function(e){
    e.preventDefault();
    this.classList.toggle("on");

    if (this.classList.contains("on")) {
        this.children[0].setAttribute("title", "닫기");
    } else {
        this.children[0].setAttribute("title", "열기");
    }
})

//top 버튼
var btntop = document.querySelector('div.top');

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('html').scrollTop;
    console.log(scroll);

    if(scroll <= 0){
        btntop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll < 2900){
        btntop.classList.remove("ab");
        btntop.classList.add("on");
    }else{
        btntop.classList.add("ab");
    }

    //도넛
    var leftl = document.querySelector(".doughnut_left_l");
    var lefts = document.querySelector(".doughnut_left_s");
    var left = document.querySelector(".combine_left");

    var centerm = document.querySelector(".doughnut_center_m");
    var centers = document.querySelector(".doughnut_center_s");

    var rightm = document.querySelector(".doughnut_right_m");
    var rights = document.querySelector(".doughnut_right_s");
    var right = document.querySelector(".combine_right");

    leftl.style.top = 700+scroll*0.1 + "px";
    lefts.style.top = 70+scroll*0.8 + "px";
    left.style.top = -600+scroll*1 + "px";

    centerm.style.top = 722+scroll*0.1 + "px";
    centers.style.top = 991+scroll*1.1 + "px";

    rightm.style.top = 365+scroll*0.5 + "px";
    rights.style.top = 310+scroll*0.1 + "px";
    right.style.top = 300+scroll*0.7 + "px";
});

    
// top 버튼 맨 위로 올라가기 
btntop.addEventListener('click', function(e){
    e.preventDefault();
    window.scroll({
        top:0,
        left: 0,
        behavior: 'smooth'
        });
    });
}); //끝