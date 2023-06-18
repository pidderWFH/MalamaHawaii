const element = document.getElementById("g-pointer");
const body = document.querySelector(".banner-video");

function setPosition(x, y) {
  element.style.transform  = `translate(${x}px, ${y}px)`;                
}

body.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function(){
    setPosition(e.clientX - 50, e.clientY - 50);
  });
});