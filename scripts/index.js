
function myfun()
{
   var x=document.getElementById("imgdiv2");
   if(x.style.display === "none")
   {
       document.querySelector(".img-div2").style.display = "flex";
       document.getElementById("vm").innerHTML= "View Less";
   }
   else
   {
       x.style.display="none";
       document.getElementById("vm").innerHTML= "View More";

   }
}