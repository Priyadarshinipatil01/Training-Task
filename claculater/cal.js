function clr(){
document.getElementById("result").value="";
}
function display(val){
document.getElementById("result").value += val;  //val =val + val adding values
}
function equate(){
let x = document.getElementById("result").value;
let y = eval(x);
document.getElementById("result").value =y;
}