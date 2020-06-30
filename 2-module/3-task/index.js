let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = x;
    this.b = y;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

let x = 3;

let y = 5;

calculator.read(x, y);

calculator.sum();

calculator.mul();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
