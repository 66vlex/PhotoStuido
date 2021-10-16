const links = document.querySelector(".order_button");
const body = document.querySelector("body");
const modal = document.querySelector(".popup");
const close = document.querySelector(".popup__close")
const history = document.querySelector("#history1")
const storyBtn = document.querySelector("#history_button")
const storyBtnSec = document.querySelector("#history_button2")
const storyClose = document.querySelector("#history_close");
const modal_order = document.querySelector("#modal_order");
links.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";
}
storyClose.onclick = function (){
    history.style.display = "none";
}

storyBtnSec.onclick = function (){
    history.style.display = "block";
}
storyBtn.onclick = function (){
    history.style.display = "block";
}
modal_order.onclick = function(){
    alert("coming soon")
}


