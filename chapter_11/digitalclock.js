//get a reference of the element by its class
const clock = document.querySelector('.clock');

//create a function to record the current time and store it in an template string to be injected into the DOM
const tick = ()=>{
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log(h, m, s)
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  clock.innerHTML = html;
}

//use the setInterval method to call the function every 1 second
setInterval(tick, 1000);