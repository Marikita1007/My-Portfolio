//AOS
AOS.init(); 

//navbar scroll
$('.navbar').ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 558) {
          $(".navbar").css("background" , "#F5D6AB");
         /*  $(".navbar-brand").css("color" , "#FFFAF2"); */
          $(".navbar").css("border-bottom" , "2px solid #FFFAF2");
         /*  $(".nav-link").css("color" , "#FFFAF2"); */
         console.log('here !')
        }
        else{
            $(".navbar").css("background" , "transparent"); 
           /*  $(".navbar-brand").css("color" , "#F5D6AB");  */
            $(".navbar").css("border-bottom" , "transparent");	
          /*   $(".nav-link").css("color" , "#F5D6AB");  */
        }
    });
});



//COMPÉTENCES 
//skillImages becomes array
let skillImages = document.querySelectorAll('.skills-image');

//Animate.css animate__pulse
for(let i = 0; i < skillImages.length; i++){
    //skillImages[i]の[i]はindex
    skillImages[i].addEventListener('mouseover', function(){
        this.classList.add("animate__pulse");
        this.classList.add("animate__animated");
        this.addEventListener('mouseout', function(){
            this.classList.remove("animate__pulse") ;
            this.classList.remove("animate__animated") ;
        });
    });
}

//MES FORMATIONS
let trainingContents = document.querySelectorAll('.training-content');

for(let i = 0; i < trainingContents.length; i++){
    trainingContents[i].addEventListener('mouseenter', function(){
        this.classList.add("animate__headShake");
        this.classList.add("animate__animated");
        this.addEventListener('mouseleave', function(){
            this.classList.remove("animate__headShake");
            this.classList.remove("animate__animated");
        });
    });
}


//INTÉRÊTS
let interestsImages = document.querySelectorAll('.interests-image img');

for(let i = 0; i < interestsImages.length; i++){
    interestsImages[i].addEventListener('mouseover', function(){
        this.classList.add("animate__rubberBand");
        this.classList.add("animate__animated");
        this.addEventListener('mouseout', function(){
            this.classList.remove("animate__rubberBand");
            this.classList.remove("animate__animated") ;
        });
    })
};


//CONTACT
let contactImages = document.querySelectorAll('.contact-content .animate-pulse');
for( let i = 0; i < contactImages.length; i++){
    contactImages[i].addEventListener('mousemove', function(){
        this.classList.add("animate__pulse");
        this.classList.add("animate__animated");
        this.addEventListener('mouseout', function(){
            this.classList.remove("animate__pulse");
            this.classList.remove("animate__animated") ;
        });
    });
}

//CONRTACT form control 
let contactForm = document.querySelector('.form-control');
console.log(contactForm);

contactForm.addEventListener('click', function(){
    contactForm.style.outline = 'none';
});




// scroll and arrow appears
window.addEventListener('scroll', function(){

    console.log(window.scrollY);

    if(window.scrollY > 500){
        document.getElementById('back-to-top').style.display = 'block';
    } else{
        document.getElementById('back-to-top').style.display = 'none';
    }

});

