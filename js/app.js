"use strict";

const header = document.querySelector('header');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', ()=>{
    header.classList.toggle('clicked');
});
const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach((headerLink) =>{
    headerLink.addEventListener('click', ()=>{
        header.classList.remove('clicked');
    });
});

if (window.pageYOffset>30){
    header.style.boxShadow =" 0 0 .2rem black";
}else{
    header.style.boxShadow ="none";
}

window.onscroll = ()=>{
    if (window.pageYOffset>30){
    header.style.boxShadow =" 0 0 .2rem black";
    }else{
    header.style.boxShadow ="none";
    }
};
