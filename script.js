function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
window.addEventListener("load", function() {
    locomotiveAnimation();
});

function loaderAnimation(){


    let tl = gsap.timeline();
    tl.from(".line h1",{
        y:150, // ye animation dega y axis m . isse fonts niche se upr ko ayenge // ye niche rakh dega h1 ko
        stagger:0.2, // ek ek krke ayega isko lgake
        duration:0.6,
        delay:0.3
    })
    
    tl.from(".line1-part1",{
        opacity:0,
        onStart: function(){          //built in function that will have a built in function
            let counter = document.querySelector(".counter");
            let c =0
            let changeCounter = setInterval(() => {
                counter.textContent=++c
                
                if(c==100){
                    clearInterval(changeCounter)
                }
            }, 1);
            
            
        }
    })
    tl.to(".line h2",{
        animationName: "anime",
        opacity:1 
        
    })
    
    tl.to(".loader",{
        opacity:0,
        duration:0.2,
        delay:0 // isko 4 kar dena
    })
    tl.from(".page1",{
        y:1200,
        delay:0.2,
        opacity:0,
        ease:Power4 
    })
    tl.to(".loader",{
        display:"none"
    })
    tl.from(".nav-part2 h4",{
        opacity:0
    })
    tl.from("#hero1 h1, #hero2 h1 , #hero3 h2 , #hero4 h1",{
        y:150,
        stagger:.3
    })
    tl.from("#hero1 , .page2",{
        opacity:0
    },"-=1.2")  // isse ye wla animation pehle chlega`
}
loaderAnimation()



function cursorAnimation() {document.addEventListener("mousemove",(e)=>{
    gsap.to("#crsr",{
        left:e.x,
        top: e.y,
        duration:.7,
        ease:"back.out"
    })
})

Shery.makeMagnet(".nav-part2 h4" , { })
}
cursorAnimation() 