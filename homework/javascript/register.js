/**
 * Created by a on 2017/7/5.
 */
(function(){
    var oRegister=id("register-form");
    var oFrom=tag("form",oRegister)[0];
    var oJoin=getByClass("btn",oRegister,"div")[0];
    oFrom.bFlag=false;
    oJoin.onclick=function(){
        if(oFrom.bFlag){
            animate(oFrom,{height:0});
        }
        else{
            animate(oFrom,{height:240});
        }
        oFrom.bFlag=!oFrom.bFlag;
    };
    var oBack=document.getElementById("back");
    oBack.onclick=function(){
        history.back();
    };
})();