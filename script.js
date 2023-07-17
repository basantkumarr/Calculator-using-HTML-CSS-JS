
let buttons= document.querySelectorAll('.btn');

let string="";
let arr= Array.from(buttons);
arr.forEach((btn) =>{ btn.addEventListener('click', (e) => {

  if( e.target.innerHTML == '='){
    string=eval(string);
document.querySelector('input').value=string;
  }

  else if(e.target.innerHTML == 'AC'){
  string="0";
 document.querySelector('input').value=string;
  
  }
    else if(e.target.innerHTML == '[x]'){
      string=string.substring(0,string.length - 1);
       document.querySelector('input').value=string;
    }
  else{
string=string + e.target.innerHTML;
document.querySelector('input').value=string;
  }
})   })
