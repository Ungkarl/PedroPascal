
 



const sections = document.querySelectorAll('section');
const navBAR = document.querySelectorAll('.header a');

window.addEventListener('scroll', ()=> {
  let currentSection = '';
  
  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop)
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop -sectionHeight / 3)) {
      currentSection = section.getAttribute('id');
      
    }
      

  })
  

  navBAR.forEach (navElement => {
    navElement.classList.remove('active-nav');
    if (navElement.classList.contains(currentSection)) {
      navElement.classList.add('active-nav')
    }
  })
})






/*OBSERVER ABOUT SECTION*/
const aboutaniStart = document.querySelector('.about-ani')
const aboutContent = document.querySelector('.about-content-container');
const worksContent = document.querySelector('.works-container');
const aboutBOX = document.querySelector('.about-box')
const introductionTEXT = document.querySelector('.introduction-text')
const observer6 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry)=> {
    if(entry.isIntersecting) {
      worksContent.classList.toggle('works-container-animation')
        observer.unobserve(entry.target);
    }
});
})
observer6.observe(worksContent);



const observer = new IntersectionObserver( (entries, observer) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting) {
        aboutaniStart.classList.toggle( 'about-animation', entries[0].isIntersecting );
          observer.unobserve(entry.target);
      }
  });
});

observer.observe(aboutContent);



const observer2 = new IntersectionObserver( (entries, observer) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting) {
        aboutBOX.classList.toggle( 'about-box-animation', entries[0].isIntersecting );
          observer.unobserve(entry.target);
      }
  });
});

observer2.observe(aboutBOX);

const observer3 = new IntersectionObserver( (entries, observer) => {
  entries.forEach((entry)=> {
      if(entry.isIntersecting) {
        introductionTEXT.classList.toggle( 'introduction-text-animation', entries[0].isIntersecting );
          observer.unobserve(entry.target);
      }
  });
});

observer3.observe(introductionTEXT);



/*OBSERVER ABOUT SECTION END*/





const burger = document.querySelector(".burger-btn");
const burgerMENU = document.querySelector(".burger-menu")
const bars = document.querySelectorAll(".bar")


burger.addEventListener('click', () => {
    burgerMENU.classList.toggle('show');
    bars.forEach((element) => {
      element.classList.toggle("active");
    });



});
burgerMENU.addEventListener('click', () => {
    burgerMENU.classList.remove("show");
    bars.forEach(element => {
element.classList.remove('active');
});
 
});


const burgersections = document.querySelectorAll('section');
const burgerNAV = document.querySelectorAll('.burger-menu a');

window.addEventListener('scroll', ()=> {
  let currentSection = '';
  
  burgersections.forEach (section => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop)
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop -sectionHeight / 1.8)) {
      currentSection = section.getAttribute('id');
      
    }
      

  })
  

  burgerNAV.forEach (navElement => {
    navElement.classList.remove('active-nav');
    if (navElement.classList.contains(currentSection)) {
      navElement.classList.add('active-nav')
    }
  })
})