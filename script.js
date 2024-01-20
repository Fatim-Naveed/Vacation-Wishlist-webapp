(function()
{
"use strict"

let flag=1

let inside=document.getElementsByClassName('container top')
document.addEventListener('keydown',function(e)
{
   if(e.key=="K")
   {
       document.querySelector('h1').innerHTML="Kilometer to Miles Convertor"
       inside[0].children[0].innerHTML="Type in a number of Kilomete and click the button to convert the distance to Miles."
       flag=0			
   }
   else if(e.key=="M")
   {
       document.querySelector('h1').innerHTML="Miles to Kilometers Converter"
       inside[0].children[0].innerHTML="Type in a number of miles and click the button to convert the distance to kilometers."
       flag=1
   }
   
})

const myform=document.querySelector('form')
let Out=document.getElementsByClassName('container bottom')
myform.addEventListener('submit',function(e)
{
   e.preventDefault();
   let input=document.querySelector('input').value
   input=parseFloat(input)

   if(input)
   {
       if(flag==1)
       {
           var answer=input*1.609344
           Out[0].innerHTML=`<h2>${input} Miles into KM  is ${answer.toFixed(3)}</h2>`;
       }
       else
       {
           var answer=input/1.609344
           Out[0].innerHTML=`<h2>${input} KM into Miles  is ${answer.toFixed(3)}</h2>`;
       }
   }
   else
   {
       Out[0].innerHTML=`wrong Input`;
   }
    })
})();