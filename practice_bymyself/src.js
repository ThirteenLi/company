/**
 * Created by a on 2017/5/30.
 */
var oIrc=document.getElementById("irc");
var aLi=oIrc.getElementsByTagName("li");
var i=3;
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
var timer2=setTimeout(function(){
    i++;
    console.log(i);
    start();
},35000);
var timer;
function start(){
    timer=setInterval(function(){
        i++;
        if(i==60){
            clearInterval(timer);
        }
        play(i);
    },3600);
}