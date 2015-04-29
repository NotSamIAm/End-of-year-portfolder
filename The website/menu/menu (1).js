//function ageNotify(){
  //var age= prompt("Please enter your age");//
 //This variable is the age, and it uses a promt to allow the user to input their age.//
//  if(age >= 21){//
  //  alert("Thank you!");//
//  }
//  else {
//    alert("Your age is not sufficent to purchase this item");//
 // }//
//}//
document.getElementById("order").addEventListener("click",Order);
for(i=0;i<document.getElementsByClassName("breakfast").length;i++){
  document.getElementsByClassName("breakfast")[i].addEventListener("click",function(){
    buttonClicked("breakfast");
  });
}
for(i=0;i<document.getElementsByClassName("lunch").length;i++){
  document.getElementsByClassName("lunch")[i].addEventListener("click",function(){
    buttonClicked("lunch");
  });
}
for(i=0;i<document.getElementsByClassName("dinner").length;i++){
  document.getElementsByClassName("dinner")[i].addEventListener("click",function(){
    buttonClicked("dinner");
  });
}
for(i=0;i<document.getElementsByClassName("drinks").length;i++){
  document.getElementsByClassName("drinks")[i].addEventListener("click",function(){
    buttonClicked("drinks");
  });
}
var currentBill = 0;
function buttonClicked(item){
  switch(item){
   //this finds what kind of item the button clicked is, and uses that to add to the total price.
    case "breakfast":
      currentBill+=10.00;
      break;
    case "lunch":
      currentBill+=11.00;
      break;
    case "dinner":
      currentBill+=13.00;
      break;
    case "drinks":
      currentBill+=5.50;
      break;
  }
}

function Order(){
  alert("You Owe $"+currentBill);
}
document.getElementById("reset").addEventListener("click",Reset);
function Reset(){
  currentBill = 0;
}
