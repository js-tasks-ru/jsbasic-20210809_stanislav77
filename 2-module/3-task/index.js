let calculator = {
  arg1: 0,
  arg2: 0,
  read ( a, b ) {
      this.arg1 = a;
      this.arg2 = b;
  },
  sum() {
      return this.arg1 + this.arg2;
  },
  mul() {
      return this.arg1 * this.arg2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
