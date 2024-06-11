
const lenis = new Lenis()

lenis.on('scroll', (e) => {
   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
   lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


gsap.fromTo('.colOne .box', {
   yPercent: -60,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colOne',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
}, {
   yPercent: 60,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colOne',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
})
gsap.fromTo('.colTwo .box', {
   yPercent: 50,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colTwo',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
}, {
   yPercent: -50,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colTwo',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
})
gsap.fromTo('.colThree .box', {
   yPercent: -40,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colThree',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
}, {
   yPercent: 40,
   duration: 10,
   scrollTrigger: {
      scroller: 'body',
      trigger: '.colThree',
      scrub: 5,

      start: '10% 50%',
      end: '90% 0%'
   }
})

var h1 = document.querySelector('h1').textContent
var splitted = h1.split('')
var host = ''
splitted.forEach(function (e) {
   host = host + `<span class='name head1'>${e}</span>`
})
document.querySelector('h1').innerHTML = host

var h2 = document.querySelector('h2').textContent
var splitted = h2.split('')
var host2 = ''
splitted.forEach(function (f) {
   host2 = host2 + `<span class='name head2'>${f}</span>`
})
document.querySelector('h2').innerHTML = host2
var tl = gsap.timeline()

gsap.from('.head1', {
   y: 350,
   duration: 1,
   stagger: 0.2,
   opacity: 0
})
gsap.from('.head2', {
   y: 350,
   duration: 1,
   stagger: 0.2,
   delay: 0.5,
   opacity: 0
})

var tl = gsap.timeline({ paused: true })

tl.from('.container', {
   scale: .7,
   duration: 0.5,
   ease: "back.out(1.7)",
})
tl.from('.close', {
   y: -50,
   x: 50,
   duration: 0.8,
 
})

document.querySelector('.close').addEventListener('click', function () {
   tl.reverse()

   setTimeout(function () {
      document.querySelector('.plaster').style.display = 'none'
      
   }, 1300)
   num=1
   heart.reverse()
})

document.querySelector('#img1').addEventListener('click', function () {
   var img1 = document.querySelector('#img1').innerHTML
   document.querySelector('.image').innerHTML = img1
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img2').addEventListener('click', function () {
   var img2 = document.querySelector('#img2').innerHTML
   document.querySelector('.image').innerHTML = img2
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img3').addEventListener('click', function () {
   var img3 = document.querySelector('#img3').innerHTML
   document.querySelector('.image').innerHTML = img3
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img4').addEventListener('click', function () {
   var img4 = document.querySelector('#img4').innerHTML
   document.querySelector('.image').innerHTML = img4
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img5').addEventListener('click', function () {
   var img5 = document.querySelector('#img5').innerHTML
   document.querySelector('.image').innerHTML = img5
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img6').addEventListener('click', function () {
   var img6 = document.querySelector('#img6').innerHTML
   document.querySelector('.image').innerHTML = img6
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img7').addEventListener('click', function () {
   var img7 = document.querySelector('#img7').innerHTML
   document.querySelector('.image').innerHTML = img7
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img8').addEventListener('click', function () {
   var img8 = document.querySelector('#img8').innerHTML
   document.querySelector('.image').innerHTML = img8
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img9').addEventListener('click', function () {
   var img9 = document.querySelector('#img9').innerHTML
   document.querySelector('.image').innerHTML = img9
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img10').addEventListener('click', function () {
   var img10 = document.querySelector('#img10').innerHTML
   document.querySelector('.image').innerHTML = img10
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})


document.querySelector('#img11').addEventListener('click', function () {
   var img11 = document.querySelector('#img11').innerHTML
   document.querySelector('.image').innerHTML = img11
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img12').addEventListener('click', function () {
   var img12 = document.querySelector('#img12').innerHTML
   document.querySelector('.image').innerHTML = img12
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img13').addEventListener('click', function () {
   var img13 = document.querySelector('#img13').innerHTML
   document.querySelector('.image').innerHTML = img13
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img14').addEventListener('click', function () {
   var img14 = document.querySelector('#img14').innerHTML
   document.querySelector('.image').innerHTML = img14
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img15').addEventListener('click', function () {
   var img15 = document.querySelector('#img15').innerHTML
   document.querySelector('.image').innerHTML = img15
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img16').addEventListener('click', function () {
   var img16 = document.querySelector('#img16').innerHTML
   document.querySelector('.image').innerHTML = img16
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img17').addEventListener('click', function () {
   var img17 = document.querySelector('#img17').innerHTML
   document.querySelector('.image').innerHTML = img17
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img18').addEventListener('click', function () {
   var img18 = document.querySelector('#img18').innerHTML
   document.querySelector('.image').innerHTML = img18
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img19').addEventListener('click', function () {
   var img19 = document.querySelector('#img19').innerHTML
   document.querySelector('.image').innerHTML = img19
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img20').addEventListener('click', function () {
   var img20 = document.querySelector('#img20').innerHTML
   document.querySelector('.image').innerHTML = img20
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img21').addEventListener('click', function () {
   var img21 = document.querySelector('#img21').innerHTML
   document.querySelector('.image').innerHTML = img21
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
document.querySelector('#img22').addEventListener('click', function () {
   var img22 = document.querySelector('#img22').innerHTML
   document.querySelector('.image').innerHTML = img22
   document.querySelector('.plaster').style.display = 'flex'
   tl.play()

  
})
let num=1
document.querySelector('.imageData').addEventListener('click',function(){
   if(num==1)
  {
   heart.play()
   num=0
  }
  else{
   heart.reverse()
   num=1
  }
 
})

var heart = gsap.timeline({paused:true})

heart.to('#empty',{
 scale:0,
duration:0.3,

})
heart.from('#fill',{
 scale:0,
duration:0.5,
ease: "back.out(1.7)",
})