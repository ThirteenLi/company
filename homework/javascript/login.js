/**
 * Created by a on 2017/6/27.
 */
(function(){
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