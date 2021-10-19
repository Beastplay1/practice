let divs = document.getElementsByTagName('div');

let layn = window.innerHeight;

let n=0

let maxtop=""

for ( let i=0; i < divs.length; i++ ) {
 	
    let thisDiv = divs[i];
    
    randomTop = myfunc2(0, layn);
    thisDiv.style.top = randomTop +"px";
if(n==0){
  n=randomTop
}

if(n>=randomTop && thisDiv.id!="mard"){
 maxtop=thisDiv
 n=randomTop
}

}



function myfunc2() {
    
  return Math.floor(Math.random() * 900);
    
}

let m = document.getElementById("mard");

let l = m.style.position=28;



function myfunc(){
    let pos = n;
    let id = setInterval(frame);
    function frame(){
     if(pos<=l){
      clearInterval(id);
     }else{
      pos--;
      }
      
    maxtop.style.top = pos + 'px';
      }
    
    
  }