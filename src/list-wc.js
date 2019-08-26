import { LitElement, html } from 'lit-element';
import 'lory.js';
import { SliderStyles } from './slider-styles';
import './list-item-wc.js';

class ListWebComp extends LitElement {
  constructor() {
    super();
    this.stop = false;
    this.frameCount = 0;
  }

  static get properties() {
    return {
      cars: { type: Array }
    };
  }

  isActive(index) {
    return index === 0 ? 'active' : '';
  }

  handleSliderInit() {
    this.js_dots.forEach(dot => 
      dot.addEventListener('click', e => 
        this.slider.slideTo(
          Array.prototype.indexOf.call(this.js_dots, e.target)
        )
      )
    )
  }

  handleSliderSlide(e) {
    this.js_dots.forEach(dot => dot.classList.remove('active'));
    this.js_dots[e.detail.currentSlide].classList.add('active');
  }

  handleDots() {
    this.js_slider = this.shadowRoot.querySelector('.js_slider');
    this.js_dots = this.js_slider.querySelectorAll('.js_dot');

    this.js_slider.addEventListener('after.lory.init', this.handleSliderInit.bind(this));
    this.js_slider.addEventListener('after.lory.slide', this.handleSliderSlide.bind(this));
  }

  startAnimating(fps) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval && !this.stop) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.slider.next();
    }
  }

  resetTimer() {
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    this.then = this.now - (this.elapsed % this.fpsInterval);
  }

  updated() {
    this.handleDots();
    
    this.slider = lory(this.js_slider, {
      rewind: true
    });

    this.startAnimating(.2); // every five seconds

    this.js_slider.addEventListener('mouseover', () => 
      this.stop = true
    );

    this.js_slider.addEventListener('mouseout', () => {
      this.resetTimer();
      this.stop = false;
    });
  }

  render() {
    return html`
      ${SliderStyles}
      <div class='slider js_slider'>
        <div class='frame js_frame'>
          <ul class='slides js_slides'>
            ${this.cars.map(car => html`
              <li class='js_slide'>
                <list-item-wc .car='${car}'></list-item-wc>
              </li>
            `)}
          </ul>
        </div>
        <div class='controls'>
          <div class='js_prev prev'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 501.5 501.5'
            >
              <g>
                <path
                  d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z'
                />
              </g>
            </svg>
          </div>
          <ul class='js_dots dots'>
            ${this.cars.map((car, index) => html`
              <li class='js_dot ${this.isActive(index)}'></li>
            `)}
          </ul>
          <div class='js_next next'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 501.5 501.5'
            >
              <g>
                <path
                  d='M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z'
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('list-wc', ListWebComp);
