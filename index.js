
var drums=document.querySelectorAll(".drum").length;

for(var i = 0;i < drums-1;i++)
{

  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var btnPress=this.innerHTML;
    clicked(btnPress);
     buttonClicked(btnPress);
  });
   
}

document.addEventListener("keypress",function(event)
{
  clicked(event.key); 
   buttonClicked(event.key);
});





function clicked(key)
{
 
  switch (key)
  {
    case "w" :
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case "a" :
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    case "s" :
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case "d" :
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "j" :
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "k" :
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "l" :
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    default:
      alert("you had pressed wrong key please press suitable key");
  }
}
function buttonClicked(clck)
{
  var btnPress=document.querySelector("."+clck)
  btnPress.classList.add("pressed");
  setTimeout(function()
  {
     btnPress.classList.remove("pressed");

  },300);
}
