$(document).ready(function(){
    $("[data-toggle=tooltip]").tooltip();
});


let x = 0;
let serial = 0;

let pays = document.getElementById('pay-button');
pays.onclick = function(){
    x++;
   document.getElementById('buy-now').innerHTML = "Pending";
   let bookName = document.getElementById('level-of-leadership').innerHTML;
   document.getElementById('notification').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   pays.onclick= function(){
       alert("item is currently pending");
   }
   serial++;
   let newPrize = document.getElementById('new-prize').innerHTML;

document.getElementById('serialNumber').innerHTML = serial;
document.getElementById('book-prize').innerHTML = newPrize;
document.getElementById('book-name').innerHTML = bookName;
document.getElementById('book-qty').style.visibility="visible";
this.style.backgroundColor = "green";

} 

let book2 = document.getElementById('pay-button2');
book2.onclick = function(){
    x++;
   document.getElementById('buy-now2').innerHTML = "Pending";
   let bookName = document.getElementById('power').innerHTML;
   document.getElementById('notification2').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book2.onclick= function(){
       alert("item is currently pending");
   }

} 
let book3 = document.getElementById('pay-button3');
book3.onclick = function(){
    x++;
   document.getElementById('buy-now3').innerHTML = "Pending";
   let bookName = document.getElementById('purpose').innerHTML;
   document.getElementById('notification3').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book3.onclick= function(){
       alert("item is currently pending");
   }

}
let book4 = document.getElementById('pay-button4');
book4.onclick = function(){
    x++;
   document.getElementById('buy-now4').innerHTML = "Pending";
   let bookName = document.getElementById('dominion').innerHTML;
   document.getElementById('notification4').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book4.onclick= function(){
       alert("item is currently pending");
   }

} 

let book5 = document.getElementById('pay-button5');
book5.onclick = function(){
    x++;
   document.getElementById('buy-now5').innerHTML = "Pending";
   let bookName = document.getElementById('level2').innerHTML;
   document.getElementById('notification5').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book5.onclick= function(){
       alert("item is currently pending");
   }

} 

let book6 = document.getElementById('pay-button6');
book6.onclick = function(){
    x++;
   document.getElementById('buy-now6').innerHTML = "Pending";
   let bookName = document.getElementById('power2').innerHTML;
   document.getElementById('notification6').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book6.onclick= function(){
       alert("item is currently pending");
   }

} 
let book7 = document.getElementById('pay-button7');
book7.onclick = function(){
    x++;
   document.getElementById('buy-now7').innerHTML = "Pending";
   let bookName = document.getElementById('purpose2').innerHTML;
   document.getElementById('notification7').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book7.onclick= function(){
       alert("item is currently pending");
   }

} 

let book8 = document.getElementById('pay-button8');
book8.onclick = function(){
    x++;
   document.getElementById('buy-now8').innerHTML = "Pending";
   let bookName = document.getElementById('dominion2').innerHTML;
   document.getElementById('notification8').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book8.onclick= function(){
       alert("item is currently pending");
   }

} 

let book9 = document.getElementById('pay-button9');
book9.onclick = function(){
    x++;
   document.getElementById('buy-now9').innerHTML = "Pending";
   let bookName = document.getElementById('level3').innerHTML;
   document.getElementById('notification9').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book9.onclick= function(){
       alert("item is currently pending");
   }

} 

let book10 = document.getElementById('pay-button10');
book10.onclick = function(){
    x++;
   document.getElementById('buy-now10').innerHTML = "Pending";
   let bookName = document.getElementById('power3').innerHTML;
   document.getElementById('notification10').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book10.onclick= function(){
       alert("item is currently pending");
   }

} 
let book11 = document.getElementById('pay-button11');
book11.onclick = function(){
    x++;
   document.getElementById('buy-now11').innerHTML = "Pending";
   let bookName = document.getElementById('purpose3').innerHTML;
   document.getElementById('notification11').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book11.onclick= function(){
       alert("item is currently pending");
   }

} 

let book12 = document.getElementById('pay-button12');
book12.onclick = function(){
    x++;
   document.getElementById('buy-now5').innerHTML = "Pending";
   let bookName = document.getElementById('dominion3').innerHTML;
   document.getElementById('notification12').innerHTML = "Item sent into the cart";
   document.getElementById('number').innerHTML = x;
   book12.onclick= function(){
       alert("item is currently pending");
   }

} 