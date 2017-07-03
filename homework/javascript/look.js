/**
 * Created by a on 2017/6/30.
 */
/**
 * Created by a on 2017/6/23.
 */




(function(){
    var oSmall=id("small-pic");
    var aSmall_pic=tag("img",oSmall);
    oSmall.style.width=4*aSmall_pic[0].offsetWidth+"px";
    var oDrag=id("drag");
    var oBig=id("big-pic");
    var oEye=id("eye");
    var Eyeimg=tag("img",oEye)[0];
    var Bigimg=tag("img",oBig)[0];
    var oMask=id("mask");
    oDrag.style.width=oBig.offsetWidth*((oEye.offsetWidth-6)/Eyeimg.offsetWidth)+"px";
    oDrag.style.height=oBig.offsetHeight*((oEye.offsetHeight-6)/Eyeimg.offsetHeight)+"px";
    for(var i=0;i<aSmall_pic.length;i++){
        aSmall_pic[i].index=i;
        aSmall_pic[i].onclick=function(){
            for(var i=0;i<aSmall_pic.length;i++){
                aSmall_pic[i].className="";
                this.className="select";
                Bigimg.src= Eyeimg.src=this.src;
                if(this.index>=2){
                    animate(oSmall,{
                        left:-aSmall_pic[0].offsetWidth
                    });
                    //oSmall.style.left=-aSmall_pic[0].offsetWidth+"px";
                }else{
                    animate(oSmall,{
                        left:0
                    });
                    // oSmall.style.left=0;
                }
            }
        };
    }
    oMask.onmouseover=function(){
        oDrag.style.display="block";
        oEye.style.visibility="visible";
    };
    oMask.onmousemove=function(e){
        e=e||window.event;
        var top= e.clientY-0.5*oDrag.offsetHeight-oBig.offsetTop;
        var left=e.clientX-0.5*oDrag.offsetWidth-oBig.offsetLeft;
        var topmax=oBig.offsetHeight-oDrag.offsetHeight;
        var leftmax=oBig.offsetWidth-oDrag.offsetWidth;
        if(top<=0){
            top=0;
        }
        if(top>=topmax){
            top=topmax;
        }
        if(left<=0){
            left=0;
        }
        if(left>=leftmax){
            left=leftmax;
        }
        oDrag.style.top= top+"px";
        oDrag.style.left=left +"px";
        Eyeimg.style.top=-(Eyeimg.offsetHeight-oEye.offsetHeight+6)*(top/topmax)+"px";
        Eyeimg.style.left=-(Eyeimg.offsetWidth-oEye.offsetWidth+6)*(left/leftmax)+"px";
    };

    oMask.onmouseout=function(){
        oDrag.style.display="none";
        oEye.style.visibility="hidden";
    };
var oCheck=id("check");
    var ocContainer=getByClass("container",oCheck,"div")[0];
    var ocImg=tag("img",ocContainer)[0];
    var oBaidu=id("baidu");
    ocContainer.bFlag=false;
    console.log(ocImg.offsetLeft);
    ocContainer.onmouseover=function(){
        ocImg.style.left=ocImg.offsetLeft+21+"px";
    };
    ocContainer.onmouseout=function(){
        ocImg.style.left=ocImg.offsetLeft-21+"px";
    };
    ocContainer.onclick=function(){
        if(ocContainer.bFlag){
            ocImg.style.left=0;
            animate(oBaidu,{width:0});
        }
        else{
            ocImg.style.left=-42+"px";
            animate(oBaidu,{width:220});
        }
        ocContainer.bFlag=!ocContainer.bFlag;
    };
})();










