const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            console.log(index)
            if (link.style.animation){
            link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.3}s`;
            }
            else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 5 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    })
 
}
navSlide();