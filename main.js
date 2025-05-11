//
// Place any custom JS here
//


const target1 = document.getElementById('hover_target1');
const section = document.getElementById('main');
const target2 = document.getElementById("hover_target2")
const immuneCell = document.getElementById("immuneCell")

target1.addEventListener('mouseenter', () => {
  section.classList.add('hovered1');
});


target1.addEventListener('mouseleave', () => {
  section.classList.remove('hovered1');
});

target2.addEventListener('mouseenter' , () => {
    section.classList.add("hovered2")
})

target2.addEventListener('mouseleave' , () => {
    section.classList.remove('hovered2')
})
