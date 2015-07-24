var jiandao=document.getElementById("jiandao");
var shitou=document.getElementById("shitou");
var bu=document.getElementById("bu");
var myResult=document.getElementById("my-result");
var cResult=document.getElementById("computer-result");
var resultText=document.getElementById("result-text");
var winCount=document.getElementById("winCount");
var loseCount=document.getElementById("loseCount");
var tieCount=document.getElementById("tieCount");
var x=0;
var y=0;
var z=0;


//选择剪刀的情况
jiandao.onclick=function(){
 myResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //当电脑选择剪刀时
  cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  resultText.innerHTML="tie";
  tieCount.innerHTML = ++z; 
}
  
  else if(computerResult<0.67){
    //当电脑选择石头时
 cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 resultText.innerHTML="lose";
    loseCount.innerHTML = ++y;
  } 
  else{
    //当电脑选择布时
    cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    resultText.innerHTML="win";
    winCount.innerHTML = ++x; 
  }
 }

//选择石头的情况
shitou.onclick=function(){
 myResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //当电脑选择剪刀时
  cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  resultText.innerHTML="win";
  winCount.innerHTML = ++x;
}
  else if(computerResult<0.67){
    //当电脑选择石头时
 cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 resultText.innerHTML="tie";
    tieCount.innerHTML = ++z;
  } 
  else{
    //当电脑选择布时
    cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    resultText.innerHTML="lose";
    loseCount.innerHTML = ++y;
  }
 }

//选择布的情况
bu.onclick=function(){
 myResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
 var computerResult=Math.random();
if(computerResult<0.33){
  //当电脑选择剪刀时
  cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  resultText.innerHTML="lose";
  loseCount.innerHTML = ++y;
} 
  else if(computerResult<0.67){
    //当电脑选择石头时
 cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true" ;
 resultText.innerHTML="win";
    winCount.innerHTML = ++x;
  } 
  else{
    //当电脑选择布时
    cResult.src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    resultText.innerHTML="tie";
    tieCount.innerHTML = ++z;
  }
 }
