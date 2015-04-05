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
