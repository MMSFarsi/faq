const faq = document.querySelectorAll(".faq");
const reverse = document.querySelector(".reverse-icon");
const faqTitle = document.querySelectorAll(".faq-title");

const rev = () => faq.classList.toggle("active");
reverse.addEventListener("click", rev);


let darkbtn = document.querySelector(".light");
let body = document.querySelector("body");
let darkmode=()=>{
    body.classList.toggle("darkmode");
}
darkbtn.addEventListener("click",darkmode )
