/**
 * Created by a on 2017/6/27.
 */
(function(){
    var oContainer=id("container");
    var oUl=tag("ul",oContainer)[0];
    var timer;
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=oUl.offsetWidth*2+"px";
    timer=setInterval(function(){
        oUl.style.left=oUl.offsetLeft-5+"px";
        if(-oUl.offsetLeft>=oUl.offsetWidth/2){
            oUl.style.left=0;
        }
    },50);
    var oLogin=id("login-form");
    var oFrom=tag("form",oLogin)[0];
    var oVip=getByClass("btn",oLogin,"div")[0];
    oFrom.bFlag=false;
    oVip.onclick=function(){
        if(oFrom.bFlag){
            animate(oFrom,{height:0});
        }
        else{
            animate(oFrom,{height:180});
        }
        oFrom.bFlag=!oFrom.bFlag;
    };
})();