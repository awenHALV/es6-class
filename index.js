// Import stylesheets
import './style.css';

const input = document.getElementById('input'),
  btn1 = document.getElementById('btn_1'),
  btn2 = document.getElementById('btn_2'),
  p = document.getElementById('result');

class Feihua {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  set extra(value) {
    console.log(value, 'asdfasdfasdf');
    this.value = value;
    p.innerHTML += this.value;
  }

  get extra() {
    return `这里是废话: ${this.text}`;
  }

  show(value) {
    p.innerHTML += `${this.text}${value}`;
    p.style.color = this.color;
  }
}

const feihua1 = new Feihua('我说', '#eeff33');

btn1.addEventListener('click', () => {
  feihua1.show(input.value);
  feihua1.extra = '儿';
  console.log(feihua1.extra);
});

class Feihua2 extends Feihua {
  constructor(text, color, fontSize) {
    super(text, color);
    this.fontSize = fontSize;
  }

  static tips = '我就是在说废话，吧啦吧啦吧啦～';

  static show_welcome_tips() {
    p.innerHTML = this.tips;
  }

  show(value) {
    p.innerHTML += `${this.text}${value}`;
    p.style.color = this.color;
    p.style.fontSize = this.fontSize;
  }
}

const feihua2 = new Feihua2('我也说', '#000', '20px');

btn2.addEventListener('click', () => {
  feihua2.show(input.value);
  // console.log(Feihua2.show_welcome_tips());
  Feihua2.extra = '儿';
  console.log(Feihua2.extra);
});

p.addEventListener('click', () => {
  console.log('p');
});
