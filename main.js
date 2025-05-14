//
// Place any custom JS here
//


const target1 = document.getElementById('hover_target1');
const section = document.getElementById('main');
const target2 = document.getElementById("hover_target2")
const target3 = document.getElementById('hover_target3');
const target4 = document.getElementById('hover_target4');
const target5 = document.getElementById('hover_target5');
const immuneCell = document.getElementById("immuneCell")
const faddingElement1 = document.getElementById("fadingElement1")
const faddingElement2 = document.getElementById("fadingElement2")
const faddingElement3 = document.getElementById("fadingElement3")
const faddingElement4 = document.getElementById("fadingElement4")
const faddingElement5 = document.getElementById("fadingElement5")




target1.addEventListener('mouseover', () => {
  section.classList.add('hovered1');
  fadingElement1.style.opacity = '1';
});



target1.addEventListener('mouseleave', () => {
  section.classList.remove('hovered1');
  fadingElement1.style.opacity = '0';
});

target2.addEventListener('mouseenter' , () => {
    section.classList.add("hovered2")
    fadingElement2.style.opacity = '1';
})

target2.addEventListener('mouseleave' , () => {
    section.classList.remove('hovered2')
    fadingElement2.style.opacity = '0';
})


target3.addEventListener('mouseenter' ,() => {
  /* section.classList.add("hover3") */
  fadingElement3.style.opacity = '1';
})

target3.addEventListener('mouseleave' , () => {
  /* section.classList.remove('hovered3') */
  fadingElement3.style.opacity = '0';
})


target4.addEventListener('mouseenter' ,() => {
  /* section.classList.add("hover3") */
  fadingElement4.style.opacity = '1';
})

target4.addEventListener('mouseleave' , () => {
  /* section.classList.remove('hovered3') */
  fadingElement4.style.opacity = '0';
})


target5.addEventListener('mouseenter' ,() => {
  /* section.classList.add("hover3") */
  fadingElement5.style.opacity = '1';
})

target5.addEventListener('mouseleave' , () => {
  /* section.classList.remove('hovered3') */
  fadingElement5.style.opacity = '0';
})