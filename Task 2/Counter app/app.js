var num = 0;
function increament() {
    num++;
    document.querySelector('.value').innerHTML = num;
}
function decreament() {
    num--;
    document.querySelector('.value').innerHTML = num;
}
let para1=document.getElementById("para1");
function changecolor(){
    para1.style.color = "red" ;
}
function Removecontent(){
    para1.innerHTML= "";
}

function Reset(){
    document.querySelector('.value').innerHTML = 0;
    para1.style.color = "red" ;
}



