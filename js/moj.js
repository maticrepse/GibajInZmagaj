/**
 * Created by maticrepse on 05/04/15.
 */
setInterval(function(){
    var w=window.innerWidth;
    var x=100*464/w;
    var y=50-x;
    var z=w/2-464;
    z=100*z/w;
    if(y==z){
        document.getElementById("penus").style.marginLeft = z+"%";
    }else{
        document.getElementById("penus").style.marginLeft = y+"%";
    }
},500);

setInterval(function(){
    document.getElementById("next").click();
},10000);
klik=1;
function izpis(){
    klik++;
    if(klik%4===0){
        document.getElementById("otroci3").style.zIndex=0;
        klik=1;
    }else{
        document.getElementById("otroci3").style.zIndex=3;
    }
}
function izpisNazaj(){
    klik--;
    if(klik==0){
        klik=3;
        document.getElementById("otroci3").style.zIndex=0;
    }else if(klik==2){
        document.getElementById("otroci3").style.zIndex=3;
    }
}
