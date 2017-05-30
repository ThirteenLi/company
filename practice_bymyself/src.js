/**
 * Created by a on 2017/5/30.
 */
var oIrc=document.getElementById("irc");
var aLi=oIrc.getElementsByTagName("li");
console.log(oIrc);
console.log(aLi);
//i:4-60
function play(i){
    for(var p in aLi){
        aLi[p].className="";
    }
    for(var j=-4;j<=4;j++){
        aLi[i+j].className="selected";
    }
    aLi[i].className="selected now";
}
var timer1;
var timer2;
var i=4;
var j=0;
function start(t1,t2,stop){
    timer1=setTimeout(function(){
        console.log(i);
        timer2=setInterval(function(){
            play(i);
            console.log(i);
            i++;
            if(i==stop){
                clearInterval(timer2);
                clearTimeout(timer1);
                j++;
                if(j<=2){
                    start(T1[j],T2[j],Stop[j]);
                }
                else{
                    console.log("j="+j);
                }
            }
        },t2);
    },t1);
}
var T1=[32000,21000,8000];
var T2=[2826,3142,3400];
var Stop=[28,50,61];
   start(T1[j],T2[j],Stop[j]);


