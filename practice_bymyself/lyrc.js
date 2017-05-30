/**
 * Created by a on 2017/5/30.
 */
var oIrc=document.getElementById("irc");
var aLi=oIrc.getElementsByTagName("li");
var i=4;
var j=0;
function cut(i){
//    i:4-60
    for(var p in aLi){
        aLi[p].className="";
    }
    for(var j=-4;j<=4;j++){
        aLi[i+j].className="selected";
    }
    aLi[i].className="selected now";
}
var timer;
function play(n){
    timer=setTimeout(function(){
        cut(i);
        i++;
        clearTimeout(timer);
        j++;
        if(j< N.length){
            play(N[j]-N[j-1]);
        }
    },n*1000)
}
var N=[35.02,37.69,40.69,42.97,46.04,48.31,50.72,52.19,54,56.46,59.40,62.01,64.73,
67.45,70.09,72.91,78.39,81.07,83.94,86.59,89.45,92.13,94.92,100.53,123.71,128.68,131.59,133.97,
136.82,139.16,142.20,144.60,147.44,150.11,152.87,155.87,158.33,161.16,166.67,169.37,172.03,
174.71,177.62,180.74,183.17,186.79,200.09,202.55,205.34,210.78,213.44,216.33,218.94,221.63,224.43,
227.18,233.27];
play(N[j]);