/**
 * Created by a on 2017/6/28.
 */

(function(){
    var oContainer=id("container");
    var oUl=tag("ul",oContainer)[0];
    var timer;
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=oUl.offsetWidth*2+"px";
    timer=setInterval(function(){
        oUl.style.left=oUl.offsetLeft-1+"px";
        if(-oUl.offsetLeft>=oUl.offsetWidth/2){
            oUl.style.left=0;
        }
    },10);
})();