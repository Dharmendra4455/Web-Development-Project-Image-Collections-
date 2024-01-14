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
var arr=["Home_page_image/latest (0).png","Home_page_image/latest (1).jpeg",
"Home_page_image/latest (2).jpeg","Home_page_image/latest (3).jpeg",
"Home_page_image/latest (4).png","Home_page_image/latest (5).jpeg",
"Home_page_image/latest (6).jpeg","Home_page_image/latest (7).jpeg",
"Home_page_image/latest (8).jpeg","Home_page_image/latest (9).png",
"Home_page_image/latest (10).png","Home_page_image/latest (11).png",];


function load(s){
var a=document.querySelector('.front-image');
setInterval(function(){
    var ran=Math.floor(Math.random()*12);
    if(s=="index"){
        a.style.backgroundImage="url('project/"+ arr[ran]+"')";
      a.style.transition="2s linear";
    }
    else{
    a.style.backgroundImage="url('"+ arr[ran]+"')";
    a.style.transition="2s linear";

}
},5000);

   }
