/**
 * Created by a on 2017/6/30.
 */
(function(){
    var oLeft=id("left");
    var oRight=id("right");
    var oMiddle=id("middle");
    var oUl=tag("ul",oMiddle)[0];
    var aBtn=getByClass("btn",oMiddle,"input");
    oLeft.onclick=oRight.onclick=function(){
        animate(oLeft,{left:-500,opacity:0});
        animate(oRight,{right:-500,opacity:0}, animate(oUl,{opacity:100}));

    };
    aBtn[0].onclick=aBtn[1].onclick=function(){
        animate(oUl,{opacity:0});
        animate(oLeft,{left:0,opacity:100});
        animate(oRight,{right:0,opacity:100});
    };
})();