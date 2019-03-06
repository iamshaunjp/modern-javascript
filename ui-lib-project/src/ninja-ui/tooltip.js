import './styles/tooltip.css';

class Tooltip {
  constructor(element){
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  init(){
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);

    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });
    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}


export { Tooltip as default };