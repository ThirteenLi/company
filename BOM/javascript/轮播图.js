/**
 * Created by a on 2017/5/22.
 */
(function(){
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var oPicture=document.getElementById("picture");
    var aimg=oPicture.getElementsByTagName("img");
    var oNum=document.getElementById("num");
    var aLi=oNum.getElementsByTagName("li");
    var oPosition=document.getElementById("position");
    var oContainer=document.getElementById("container");
    var nowindex=1;
    var timer;
    var speed_level=0;
    var oStart=document.getElementById("start");
    var oStop=document.getElementById("stop");
    var oVup=document.getElementById("vup");
    var oVdown=document.getElementById("vdown");
    var oNav=document.getElementById("nav");
    var aRli=oNav.getElementsByTagName("li");
    var aBody=document.getElementsByTagName("body")[0];
    function changeimg(n){
        for(var i=0;i<aimg.length;i++){
            aimg[i].className="";
        }
        for(var i=0;i<aLi.length;i++){
            aLi[i].className="";
        }
        aimg[n].className="selected";
        aLi[n].className="selected";
        aLi[n+1].className="selected sco";
        aLi[n+2].className="selected";
    }
    function play(n){
        timer=setInterval(function(){
            oRight.onclick();
        },n);
    }
    function stop(){
        clearInterval(timer);
    }
    play(1000);
    oLeft.onclick=oRight.onclick=function(){
        if(this==oLeft){
            nowindex=(nowindex+22)%23;
        }
        if(this==oRight){
            nowindex=(nowindex+1)%23;
        }
        changeimg(nowindex);
    };
    oContainer.onmouseover=oStop.onclick=function(){
        stop();
        speed_level=0;
    };
    oContainer.onmouseout=oStart.onclick=function(){
        stop();
        play(1000+speed_level*300);
    };
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i-1;
        aLi[i].onclick=function(){
            nowindex=this.index;
            if(nowindex==-1){
                nowindex=22;
            }
            if(nowindex==23){
                nowindex=0;
            }
            changeimg(nowindex);
        };
    }
    aBody.oncontextmenu=function(e){
        e=e||window.event;
        oNav.style.display="block";
        oNav.style.left= (e.clientX<(aBody.clientWidth-102)? e.clientX:(aBody.clientWidth-102))+"px";
        oNav.style.top= (e.clientY<(aBody.clientHeight-160)? e.clientY: e.clientY-159)+"px";
        return false;
    };
    aBody.onclick=function(){
        oNav.style.display="none";
        return false;
    };
    oVdown.onclick=function(){
        speed_level++;
        if(speed_level>3){
            speed_level=3;
        }
        stop();
        play(1000+speed_level*300);
    };
    oVup.onclick=function(){
        speed_level--;
        if(speed_level<-3){
            speed_level=-3;
        }
        stop();
        play(1000+speed_level*300);
    };
})();