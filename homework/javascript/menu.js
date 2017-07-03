/**
 * Created by a on 2017/6/28.
 */
(function(){
    var oPicContainer=id("pic-container");
    var oPics=id("pics");
    var aPics=tag("img",oPics);
    var oNum=id("num");
    var aLi=tag("li",oNum);
    var oLeft=id("left");
    var oRight=id("right");
    //console.log(oPics,oNum,aLi,oLeft,oRight);
    var nowindex=0;
    var timer;
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            nowindex=this.index;
            change(nowindex);
        };
    }
    function change(i){
        for(var j=0;j<aLi.length;j++){
            aLi[j].className="";
        }
        aLi[i].className="selected";
        //oPics.style.left=-i*aPics[0].offsetWidth+"px";
        animate(oPics,{left:-i*aPics[0].offsetWidth});
    }
    oLeft.onclick=oRight.onclick=function(){
        if(this==oLeft){
            nowindex=(nowindex+4)%5;
        }
        if(this==oRight){
            nowindex=(nowindex+1)%5;
        }
        change(nowindex);
    };
    timer=setInterval(function(){
        oRight.onclick();
    },1200);
    oPicContainer.onmouseover=function(){
        clearInterval(timer);
    };
    oPicContainer.onmouseout=function(){
        timer=setInterval(function(){
            oRight.onclick();
        },1200);
    };
    var oBox=id("box");
    var obContainer=getByClass("container",oBox,"div")[0];
    var obImg=tag("img",obContainer)[0];
    obContainer.bFlag=false;
    obContainer.onmouseover=function(){
        obImg.style.left=obImg.offsetLeft+21+"px";
    };
    obContainer.onmouseout=function(){
        obImg.style.left=obImg.offsetLeft-21+"px";
    };
    obContainer.onclick=function(){
        if(obContainer.bFlag){
            obImg.style.left=0;
            animate(oBox,{width:0});
        }
        else{
            obImg.style.left=-42+"px";
            animate(oBox,{width:400});
        }
        obContainer.bFlag=!obContainer.bFlag;
    };
})();