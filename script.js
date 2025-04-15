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