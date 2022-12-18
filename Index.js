const navToggle= document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');




navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(Link =>{
    Link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    })
});



function changeSection() {
    // document.querySelector('.portfolio').style.color = 'blue';
    window.location = "#work";
}





