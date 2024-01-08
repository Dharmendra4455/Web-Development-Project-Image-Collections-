setInterval( function fun(){
    var date=new Date();
document.getElementById('time').innerHTML=date.toLocaleTimeString();
       },1000)


      
       setInterval( function fun1(){
    var date2=new Date();
    document.getElementById('date').innerHTML=date2.toDateString();
       },1000)
   function menufun(){
    var menu=document.querySelector(".menu-bar");
    menu.classList.toggle('menu-bar2');
    
   }    