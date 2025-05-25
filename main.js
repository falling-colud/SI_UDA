//
// Improved Hover Logic with Fade and Class Handling
//

// Elements
const section = document.getElementById('main');

const targets = [
  {
    target: document.getElementById('hover_target1'),
    className: 'hovered1',
    fadeEl: document.getElementById('fadingElement1'),
    delay: 300
  },
  {
    target: document.getElementById('hover_target2'),
    className: 'hovered2',
    fadeEl: document.getElementById('fadingElement2'),
    delay: 300
  },
  {
    target: document.getElementById('hover_target3'),
    className: 'hovered3',
    fadeEl: document.getElementById('fadingElement3'),
    delay: 300
  },
  {
    target: document.getElementById('hover_target4'),
    className: 'hovered4',
    fadeEl: document.getElementById('fadingElement4'),
    delay: 300
  },
  {
    target: document.getElementById('hover_target5'),
    className : 'hovered5',
    fadeEl : document.getElementById('fadingElement5'),
    delay : 300
  }
];


function setupHoverEffect(target, className, fadeEl, delay = 400) {
  let timeout;

  target.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    section.classList.add(className);
    fadeEl.style.opacity = '1';
  });

  target.addEventListener('mouseleave', () => {
    fadeEl.style.opacity = '0';

    timeout = setTimeout(() => {
      section.classList.remove(className);
    }, delay);
  });
}


targets.forEach(({ target, className, fadeEl, delay }) => {
  setupHoverEffect(target, className, fadeEl, delay);
});


const target5 = document.getElementById('hover_target5');
const fadingElement5 = document.getElementById('fadingElement5');

target5.addEventListener('mouseenter', () => {
  fadingElement5.style.opacity = '1';
});

target5.addEventListener('mouseleave', () => {
  fadingElement5.style.opacity = '0';
});
