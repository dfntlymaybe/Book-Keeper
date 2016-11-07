console.log(document.getElementById('t1').innerHTML);
document.getElementById('t1').onclick = function(){
  debugger;
    if (document.getElementById('t1').innerHTML === "Welcome to our Book Store"){
      document.getElementById('t1').innerHTML = "Read More Books";
    }else{
      document.getElementById('t1').innerHTML = "Welcome to our Book Store";
    }
}