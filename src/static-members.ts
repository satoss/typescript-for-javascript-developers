export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'tanaka';
  static lastName: string = 'taro';

  static work() {
    return `Hey, guys! This is ${this.firstName}`;
  }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
