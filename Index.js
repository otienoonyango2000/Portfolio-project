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

// get modal element
const modal = document.getElementById('simplemodal');
// get open modal button
const openBtn = document.getElementById('modalbtn');
// get close button
const closeBtn = document.getElementsByClassName('closebtn')[0];

//listen for openclick
openBtn.addEventListener('click', openModal);
//listen for closeclick
closeBtn.addEventListener('click', closeModal);
//listen for outsideclick
window.addEventListener('click', clickOutSide);

//function to open modal
function openModal(e) {
    e.preventDefault();
    // console.log(123)
    modal.style.display = 'block';
};

//function to close modal
function closeModal(e) {
    e.preventDefault();
    modal.style.display = 'none';
};

//function to close modal IF CLICK OUTSIDE
function clickOutSide(e) {
    e.preventDefault();
    if(e.target == modal){
    modal.style.display = 'none';
}
};





