const burger_btn = document.querySelector(".icon_burger")
const burger = document.querySelector(".burger")

burger_btn.onclick  = function(){
	burger.classList.toggle("burger_active")
}