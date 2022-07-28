

gsap.to("#circle",{
    transform:"scale(40)",
    ease: "power4.out",
    delay:1.9,
    duration:4,
    zIndex:"-1",
    

})
gsap.to("#circle",{
    opacity:0,
    delay:2.4
})


gsap.from("#main .page",{
    delay:2.5,
    
    
    opacity:0,
    zIndex:9,
    duration:2,
    ease:"power4.out",
   
    
 
})

gsap.from("#text1",{
    delay:3,
    opacity:0,
    onUpdate:()=>{
        $('.anime').textillate({ in: { effect: 'fadeInUp' } });
    }
})
gsap.from("h1",{
    delay:3,
    opacity:0,
    duration:2
  
})

gsap.from("#c",{
    delay:3,
   opacity:0,
    duration:2
  
})


gsap.from("#orb",{
    delay:3,
    opacity:0,
    top:"48%",
    duration:2,
   
})
gsap.from("#nav",{
    opacity:0,
    delay:3,



})
var orb = document.querySelector("#orb")
orb.addEventListener('mousemove', ev => {
    var x = event.screenX;
    var y = event.screenY;
    
    x = x*.4
    y = y*.4
  
    orb.style.transform = `rotate(${x}deg)`
    orb.style.transform = `rotate(${y}deg)`
  });