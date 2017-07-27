/**
 * Created by a on 2013/11/4.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
require(["jquery","dialog"],function($,Dialog){
    var settings = {
         width: "80%",
         height:"80%",
         title: "我的弹出层",
        content: "02.html"
    };
    $("#open").on("click",function(){
        Dialog.open(settings);
    });
});