gsap.from('#box',{
    rotation: -360,
    duration: 1,
    // ease: "slow(0.5, 0.8, true)",
    // repeat: -1
})

gsap.to('#box3 ',{
    duration: 2, 
    x: "20vw",
   ease: "steps(5)",
    // repeat: -1,
    // opacity: 0
    scrollTrigger:'#box3'
})
gsap.to('#box4',{
    x: "20vw",
    duration: 0.3,
    // ease: "slow(0.5, 0.8, true)",
    // repeat: -1
    scrollTrigger:{
        trigger:'#box4',
        scroller:'body',
        // markers:true,
        start:'top 40%',
        end:'top 0%',
        // scrub:true
        scrub:1
    }
})

gsap.to('.b6 h1',{
    transform:'translateX(-100%)',
    duration:2,
    scrollTrigger:{
        trigger:'.b6',
        scroller:'body',
        // markers:true,
        start:'top 20%',
        end:'top 0',
        // scrub:true
        scrub:5,
        pin:true,

    }
})
gsap.to('.b5 .box5',{
    transform:'translateX(-100%)',
    duration:2,
    scrollTrigger:{
        trigger:'.b5',
        scroller:'body',
        markers:true,
        start:'top 20%',
        end:'top 0',
        // scrub:true
        scrub:1,
        // pin:true,

    }
})

let time = () => {
    let i = 0
    let stop = setInterval( () => {
        i = Math.floor(Math.random()*15)

        if (i < 100 ){

            console.log(i)
            document.querySelector('.b9 h2').innerHTML = i + '%'
        }else{
            i = 100
            document.querySelector('.b9 h2').innerHTML = i + '%'

            console.log('dd')
        }
    },[100])
    
    setTimeout(()=>{
        clearInterval(stop)
    },[2000])
}
// time()

let t1 = gsap.timeline()

t1.from('.b9 h2',{
  
    // delay: 0.5,
    duration:1,
    onStart : time()
})

t1.to('.b9',{
    top : '-100vh',
    delay: 1,
    duration:1
})