const scrollBtn = document.querySelector(".show");
const portfolio = document.querySelectorAll(".portfolio");
const story = document.querySelectorAll(".storys");
const order = document.querySelectorAll(".order");
const contact = document.querySelectorAll(".contact");
const a = document.querySelectorAll("a");

window.onscroll = () => {
    if (window.scrollY > 700){
        scrollBtn.classList.remove("show_hide")
    }else if(window.scrollY < 700){
        scrollBtn.classList.add("show_hide")
    }
}
for (let i = 0;  i < portfolio.length ; i++) {
    portfolio[i].addEventListener("click", function(){
        window.scrollTo(0,900)
    })
}
for (let i = 0;  i < story.length ; i++) {
    story[i].addEventListener("click", function(){
        window.scrollTo(0,1600)
    })
}
for (let i = 0;  i < order.length ; i++) {
    order[i].addEventListener("click", function(){
        window.scrollTo(0,2800)
    })
}
for (let i = 0;  i < contact.length ; i++) {
    contact[i].addEventListener("click", function(){
        window.scrollTo(0,3650)
    })
}

scrollBtn.onclick = () => {
    window.scrollTo(0,0);
}

// story.onclick = () => {
//     window.scrollTo(0,1600)
// }
// order.onclick = () => {
//     window.scrollTo(0,2800)
// }
// contact.onclick = function(){
//     window.scrollTo(0, 3650)
// }