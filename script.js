console.log(document.getElementById('t1').innerHTML);
document.getElementById('t1').onclick = function(){
    if (document.getElementById('t1').innerHTML === "Welcome to our Book Store"){
      document.getElementById('t1').innerHTML = "Read More Books";
    }else{
      document.getElementById('t1').innerHTML = "Welcome to our Book Store";
    }
}

var createButton = function(){
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Click"));
  btn.onclick = createButton;
  document.getElementById('innerdiv').appendChild(btn);
}
var btnClicked = document.getElementsByClassName('btn')[0];
btnClicked.onclick = createButton;



