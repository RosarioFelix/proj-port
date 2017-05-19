
window.addEventListener("load",function() {
  
  var row= document.getElementById('row');

for(var i = 1; i<=3; i++){
   var col=document.createElement("div");
   col.classList.add("col")
   col.classList.add("s12")
   col.classList.add("m4");
   col.setAttribute("id","padding-img");

  var img =document.createElement("img");
		img.classList.add("materialboxed");
    img.classList.add("responsive-img");

    img.setAttribute("id","size-img");
    img.setAttribute("src","assets/img/photos/"+ i+".jpg");

    col.appendChild(img)
    row.appendChild(col);
}

var row2= document.getElementById('row2');

for(var i = 4; i<=6; i++){
   var col=document.createElement("div");
   col.classList.add("col")
   col.classList.add("s12")
   col.classList.add("m4");
   col.setAttribute("id","padding-img");

  var img =document.createElement("img");
		img.classList.add("materialboxed");
    img.classList.add("responsive-img");

    img.setAttribute("id","size-img");
    img.setAttribute("src","assets/img/photos/"+ i+".jpg");

    col.appendChild(img)
    row2.appendChild(col);
  }
});
