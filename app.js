var jiandao=document.getElementById("jiandao");
var shitou=document.getElementById("shitou");
var bu=document.getElementById("bu");
jiandao.onclick=function(){
 document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //jiandao
  document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  document.getElementById("result-text").innerHTML="tie";
}
  
  else if(computerResult<0.67){
    //shitou
 document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 document.getElementById("result-text").innerHTML="lose";
  } 
  else{
    //bu
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-text").innerHTML="win";
  }
 }

shitou.onclick=function(){
 document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //jiandao
  document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  document.getElementById("result-text").innerHTML="win";
}
  else if(computerResult<0.67){
    //shitou
 document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 document.getElementById("result-text").innerHTML="tie";
  } 
  else{
    //bu
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-text").innerHTML="lose";
  }
 }
bu.onclick=function(){
 document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //jiandao
  document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  document.getElementById("result-text").innerHTML="lose";
} 
  else if(computerResult<0.67){
    //shitou
 document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 document.getElementById("result-text").innerHTML="win";
  } 
  else{
    //bu
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-text").innerHTML="tie";
  }
 }
