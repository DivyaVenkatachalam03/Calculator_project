var num="";
function get_input(value){
      num+=value;
    document.getElementById("num2").innerHTML=num;
}
function submit(){
    var expr=num;
    var out=eval(expr);
    document.getElementById("num2").innerHTML=out;
    num=out;
}
function clr(){
    num="0";
    document.getElementById("num2").innerHTML=num;
    num="";
}
function bks(){
    var l=num.length;
    var e=l-1;
    var slice=num.slice(0,e);
    num=slice;
    document.getElementById("num2").innerHTML=num;
}