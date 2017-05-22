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
    oLeft.onclick=oRight.onclick=function(){
        if(this==oLeft){
            nowindex=(nowindex+22)%23;
        }
        if(this==oRight){
            nowindex=(nowindex+1)%23;
        }
        changeimg(nowindex);
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
    function play(){
        timer=setInterval(function(){
            oRight.onclick();
        },800);
    }
    function stop(){
        clearInterval(timer);
    }
    play();
    oContainer.onmouseover=function(){
        stop();
    };
    oContainer.onmouseout=function(){
        play();
    };
})();