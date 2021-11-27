var tl = gsap.timeline();

tl
.from('.upper',{
    duration:2,
    ease:Expo.easeInOut,
    width:4,
    
})
.from('.upper2',{
    duration:2,
    ease:Expo.easeInOut,
    width:4,
    
},"-=1")
.from('.per',{
    duration:2,
    ease:Expo.easeInOut,
    x:-160
    
},"-=3")

.from('.arrow',{
    duration:2,
    ease:Expo.easeInOut,
    x:-160
    
},"-=3")


.from('.per2',{
    duration:2,
    ease:Expo.easeInOut,
    x:-190
    
},"-=2")

.from('.arrow2',{
    duration:2,
    ease:Expo.easeInOut,
    x:-190
    
},"-=2")


