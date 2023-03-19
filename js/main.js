const header = document.querySelector('header');

window.addEventListener ('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0)
})

const navbar = document.querySelector('.navbar');

// document.querySelector('#menu-icon ').addEventListener('click',function(){
//     navbar.classList.toggle('showNav')
// })

document.querySelector('#menu-icon ').onclick= function(){
    navbar.classList.toggle('showNav')
}

window.onscroll = ()=>{
    navbar.classList.remove('showNav')

}

const sr = ScrollReveal({
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset : true
})

sr.reveal('.home-text',{delay:200,origin:'top'});
sr.reveal('.home-img',{delay:300,origin:'top'});
sr.reveal('.feature, .product, .cta-content, .contact',{delay:200,origin:'top'});